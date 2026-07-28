# Tim Bootle Personal Website

A responsive static personal website built with plain HTML, CSS, and JavaScript.

## Files

- `index.html`
- `about.html`
- `projects.html`
- `reading-list.html`
- `contact.html`
- `css/styles.css`
- `js/main.js`
- `images/tim-bootle-headshot.jpg`

## Publish with GitHub Pages

1. Create a GitHub repository.
2. Upload the contents of this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root`.
6. Save.

GitHub will provide the public site URL after deployment.

### HTTPS

After the custom domain's DNS records have been verified and its TLS certificate is
available, enable **Enforce HTTPS** under **Settings → Pages**. That server-side
setting is the primary HTTPS enforcement mechanism. The site also redirects HTTP
visitors to the equivalent HTTPS URL in the browser and upgrades insecure
subresource requests as a fallback; local HTTP development remains supported.

## Recommended edits

- Replace the reading-list placeholders with your full existing reading list.
- Expand the projects page as projects become ready for public presentation.

## Publishing reading progress

The reading list stores edits in the visitor's browser until **Publish changes**
is selected. That button opens a prefilled GitHub issue. When the issue is
submitted by `TimBootleBC`, the `Publish reading list update` workflow validates
the book identifiers and allowed values, merges the browser's edits, writes a
complete progress, favorite, and impact record for every book to
`reading-list-state.json`, and closes the issue. Change both the `REPOSITORY`
constant in `reading-list.html` and the allowed account in
`.github/workflows/publish-reading-list.yml` if the repository is transferred
to another GitHub account.
