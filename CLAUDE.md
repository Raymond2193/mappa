# CLAUDE.md

This file gives Claude Code context on the Mappa project. Read this before proposing any plan or writing any code.

## Project overview

Mappa is a geographic scheduling optimizer for businesses with frequent in-person appointments. Given a new client address, it finds nearby existing appointments and suggests time slots that cluster efficiently, using a drive-time-aware buffer system. Full product context lives in README.md.

## Tech stack (do not deviate without asking)

- Backend: Python + Flask, RESTful API conventions
- Frontend: React + Vite
- Database: PostgreSQL
- Geocoding: Google Geocoding API, with results cached in the database
- Distance calculation: Haversine formula, computed locally (no drive-time API calls in v1)

## Critical workflow rule

**Never write, edit, or delete files, and never run a command that modifies the filesystem or git state, without first presenting a plan and receiving explicit approval.** This applies even for small or "obvious" changes. Use Plan Mode by default. If asked to do something outside the current approved step, stop and ask before proceeding.

## Folder structure (target)

```
mappa/
  client/          # React + Vite frontend
  server/          # Flask backend
    app.py
    config.py
    routes/
    services/
    db/
    tests/
  README.md
  CLAUDE.md
  .env.example
  .gitignore
```

## Coding conventions

- Prioritize simple, readable code over clever or highly optimized code. This is a learning-focused portfolio project — prefer the version a developer can read top-to-bottom and understand immediately over a version that's shorter or marginally faster. Avoid premature optimization, dense one-liners, or unnecessary abstraction layers.
- Separation of concerns: routes handle HTTP only, services hold business logic, db/ holds queries. No business logic inside route handlers.
- All API responses follow: `{ "success": true, "data": {...} }` or `{ "success": false, "error": "message" }`
- All secrets and config values come from environment variables, never hardcoded. Add new variables to `.env.example` with placeholder values whenever a real one is introduced.
- Commit messages follow Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `test:`, `refactor:`
- Branch naming: `feature/<short-description>`, branched off `dev`, merged via pull request — never commit directly to `main` or `dev`
- The scheduling engine (Haversine distance, slot generation, buffer calculation) must be written as pure functions with no side effects, and must have unit tests
- Explain code in prose alongside it rather than relying on inline comments — the developer using this repo wants section-by-section explanations, not comments embedded in the code

## Roadmap

The project follows a 12-step roadmap (full detail in README.md). Only work on the step currently requested — do not jump ahead to future steps or scaffold things not yet asked for.

## What not to do

- Do not introduce new dependencies without explaining why and asking first
- Do not change the tech stack choices above
- Do not commit directly to `main` or `dev`
- Do not generate placeholder/mock data into production code paths without clearly marking it
- Do not assume drive-time API integration — v1 uses straight-line Haversine distance only