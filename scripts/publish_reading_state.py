#!/usr/bin/env python3
"""Validate a reading-list update issue and publish its state file."""

from __future__ import annotations

import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

MARKER = re.compile(r"<!-- reading-list-update\s*\n(.*?)\n-->", re.DOTALL)
VALID_STATUSES = {"not-started", "reading", "finished"}
VALID_IMPACTS = {1, 2, 3, 4, 5}
MAX_BOOKS = 1000


def fail(message: str) -> None:
    raise SystemExit(f"Invalid reading-list update: {message}")


def load_json(path: Path) -> dict:
    try:
        value = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as error:
        fail(f"could not read {path}: {error}")
    if not isinstance(value, dict):
        fail(f"{path} must contain a JSON object")
    return value


def main() -> None:
    if len(sys.argv) != 4:
        raise SystemExit("usage: publish_reading_state.py EVENT STATE READING_LIST_HTML")

    event_path, state_path, html_path = map(Path, sys.argv[1:])
    event = load_json(event_path)
    state = load_json(state_path)
    body = event.get("issue", {}).get("body") or ""
    matches = MARKER.findall(body)
    if len(matches) != 1:
        fail("the issue must contain exactly one reading-list-update marker")
    if len(matches[0]) > 100_000:
        fail("the update payload is too large")

    try:
        payload = json.loads(matches[0])
    except json.JSONDecodeError as error:
        fail(f"the marker does not contain valid JSON: {error}")
    if not isinstance(payload, dict) or set(payload) != {"schemaVersion", "baseRevision", "books"}:
        fail("the payload fields are not recognized")
    if payload["schemaVersion"] != 1:
        fail("unsupported schemaVersion")
    if payload["baseRevision"] != state.get("revision"):
        fail("the update is based on an old revision; reload the website and publish again")

    books = payload["books"]
    if not isinstance(books, dict) or len(books) > MAX_BOOKS:
        fail("books must be an object of a reasonable size")

    html = html_path.read_text(encoding="utf-8")
    known_ids = set(re.findall(r'<tr\b[^>]*\bid="([a-z0-9-]+)"', html))
    if not known_ids:
        fail("no book identifiers were found in the reading list")

    clean_books: dict[str, dict] = {}
    for book_id, book_state in sorted(books.items()):
        if book_id not in known_ids:
            fail(f"unknown book identifier: {book_id}")
        if not isinstance(book_state, dict) or not book_state or not set(book_state) <= {"status", "favorite", "impact"}:
            fail(f"invalid state for {book_id}")
        clean: dict[str, object] = {}
        if "status" in book_state:
            if book_state["status"] not in VALID_STATUSES:
                fail(f"invalid status for {book_id}")
            clean["status"] = book_state["status"]
        if "favorite" in book_state:
            if not isinstance(book_state["favorite"], bool):
                fail(f"favorite must be true or false for {book_id}")
            clean["favorite"] = book_state["favorite"]
        if "impact" in book_state:
            if book_state["impact"] not in VALID_IMPACTS or isinstance(book_state["impact"], bool):
                fail(f"impact must be an integer from 1 to 5 for {book_id}")
            clean["impact"] = book_state["impact"]
        clean_books[book_id] = clean

    published = {
        "schemaVersion": 1,
        "revision": state["revision"] + 1,
        "updatedAt": datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z"),
        "books": clean_books,
    }
    state_path.write_text(json.dumps(published, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
