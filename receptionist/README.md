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

Sample messages, dispatch changes, and payment states live only in memory and reset on reload. Only non-sensitive demo settings are saved to browser localStorage under `receptionist-lowcountry-settings-v2`. Reset demo clears these settings and resets all sample records. Do not enter actual customer or payment information.

Overview and Insights show explicitly illustrative aggregate metrics; they are not a live aggregation of the six detailed sample conversation records. Quotes are seeded historical documents: changing catalog demo settings affects new scripted conversations, not historical quotes. Territory text and temperature policy settings are illustrative configuration, not working geofencing, weather, or safety-classification integrations. Safety guidance remains enabled.

Hash navigation keeps deep links compatible with static GitHub Pages. Assets are relative to this directory. Existing root pages and CNAME are unchanged.

## Publication

The `feature/receptionist-gui` branch retains the prototype implementation. The site's existing GitHub Pages deployment publishes from `main`; merging the feature branch adds the `/receptionist/` route without changing hosting or requiring AWS.

## Future backend attachment

Replace the in-memory fixtures and action handlers in `app.js` with a typed API client. Keep tenant resolution, identity verification, safety authorization, authoritative scheduling, pricing, payment state, and integration idempotency on the server. The prototype's UI states must never be trusted as authorization or financial truth.


## Lowcountry pilot configuration

- Independent fictional customer: **HVAC of the Lowcountry LLC**. It is not owned by Tim Bootle, American Ibis Services LLC, or American Ibis HVAC Services LLC.
- Software owner/provider: **American Ibis Services LLC (Montana)**.
- **American Ibis HVAC Services LLC (South Carolina)** is a separate operating company and intended software licensee, not the fictional customer.
- Service areas: **Charleston, North Charleston, Mount Pleasant, Summerville, Hanahan, and Goose Creek, South Carolina**.
- Office: **Monday–Friday, 8 a.m.–5 p.m., America/New_York**. After-hours intake captures requests and flags urgent cases for human review; no automatic dispatch or arrival-time guarantee.
- Default diagnostic fee: **$99**. Standard tune-up: **$129**. No repair pricing is invented.
- New requests require **dispatcher approval** before an appointment is confirmed. Seeded confirmed visits represent prior human approval; assignment updates require explicit dispatcher acknowledgment.
- Gas odors, CO alarms, smoke, and dangerous leaks receive safety-first handling; emergency guidance is never gated on payment.
- All six sample properties and 843-555-01xx contact numbers are fictional, one per listed city. Cities are illustrative coverage configuration, not working geofencing.
- The settings key is isolated from the old generic workspace. Existing generic/Acme settings are not imported, so returning visitors see the new customer's defaults; newly saved Lowcountry settings persist normally.
- Hours, fees, greeting, and service-area text are editable in Settings. Office closing time must follow opening time. These are UI configuration only, not live scheduling or dispatch enforcement.
