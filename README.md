# Mappa

A geographic scheduling optimizer for businesses that run frequent in-person appointments. Mappa clusters new bookings near existing appointments by calculating drive-time-aware buffers between visits, helping mobile service businesses (home repair, sales reps, healthcare visits, real estate) minimize windshield time and maximize appointments per day.

## How it works

A business enters a new client's address. Mappa geocodes the address, compares it against existing appointments using the Haversine distance formula, and returns two groups of results:

- **Clustered slots** — days with nearby appointments already booked, with suggested time slots that chain efficiently onto them, including a calculated drive-time buffer between visits
- **Open days** — days with no nearby appointments, shown as a fallback when no efficient clustering is available

Businesses can also manually override suggested slots, mark days/times as unavailable on a visual calendar, and adjust search radius, results per group, and date preferences (before/around/after a chosen date).

## Tech stack

- **Backend:** Python, Flask (RESTful API)
- **Frontend:** React, Vite
- **Database:** PostgreSQL
- **Geocoding:** Google Geocoding API (results cached to minimize API cost)
- **Distance calculation:** Haversine formula (straight-line distance between coordinates)

## Project status

🚧 In active development. See the roadmap below for current progress.

## Roadmap

- [X] Step 1 — Repo and environment setup
- [X] Step 2 — Frontend scaffold
- [ ] Step 3 — Backend scaffold
- [ ] Step 4 — Database design and setup
- [ ] Step 5 — Auth
- [ ] Step 6 — Geocoding and coordinate system
- [ ] Step 7 — Scheduling engine
- [ ] Step 8 — Appointment CRUD
- [ ] Step 9 — Availability and settings
- [ ] Step 10 — Analytics
- [ ] Step 11 — Polish and error handling
- [ ] Step 12 — Deployment

## Running locally

_Instructions will be added as the backend and frontend scaffolds are completed._

## License

MIT