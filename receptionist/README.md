# Receptionist — HVAC GUI prototype

Frontend-only, buildless HTML/CSS/JavaScript for `https://timbootle.com/receptionist/`.

## Run

From the repository root:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/receptionist/`. No install, database, AWS account, credentials, or environment variables are required.

## Included

- Overview and sample activity metrics
- Searchable omni-channel conversations and transcripts
- Dispatch board with technician assignment and state changes
- Simulated SMS inbox and customer records
- Quotes, SMS previews, quote approval, and simulated payment states
- Sample insights and channel previews for PSTN, website, and mobile
- Scripted no-cooling, maintenance, and gas-safety conversations
- Text intake fallback and CSV export
- Editable business, greeting, fees, territory description, and HVAC policy settings
- Responsive layout, keyboard navigation, semantic dialogs, and reduced-motion support

## Demo boundaries

All built-in records are fictional. No microphone is accessed, no audio is recorded, no SMS is sent, no appointment is booked, and no money is collected. No external services, APIs, fonts, scripts, or databases are required. Inline SVG icons and a local favicon are included.

Sample messages, dispatch changes, and payment states live only in memory and reset on reload. Only non-sensitive demo settings are saved to browser localStorage under `receptionist-demo-settings-v1`. Reset demo clears these settings and resets all sample records. Do not enter actual customer or payment information.

Overview and Insights show explicitly illustrative aggregate metrics; they are not a live aggregation of the six detailed sample conversation records. Quotes are seeded historical documents: changing catalog demo settings affects new scripted conversations, not historical quotes. Territory text and temperature policy settings are illustrative configuration, not working geofencing, weather, or safety-classification integrations. Safety guidance remains enabled.

Hash navigation keeps deep links compatible with static GitHub Pages. Assets are relative to this directory. Existing root pages and CNAME are unchanged.

## Publication

The `feature/receptionist-gui` branch retains the prototype implementation. The site's existing GitHub Pages deployment publishes from `main`; merging the feature branch adds the `/receptionist/` route without changing hosting or requiring AWS.

## Future backend attachment

Replace the in-memory fixtures and action handlers in `app.js` with a typed API client. Keep tenant resolution, identity verification, safety authorization, authoritative scheduling, pricing, payment state, and integration idempotency on the server. The prototype's UI states must never be trusted as authorization or financial truth.
