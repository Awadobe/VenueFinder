# VenueFind

VenueFind is a venue discovery and availability-confirmation service for people planning weddings, birthdays, workshops, corporate functions, conferences, dinners, and other events in Sierra Leone.

The Stage 1 product focuses on Freetown and the wider Western Area. Customers can discover suitable event spaces, compare practical venue information, understand the status of a preferred date, and request confirmation or an inspection.

## Current status

This repository contains the first website foundation:

- Mobile-first homepage and venue search
- Pilot venue catalogue
- Honest three-state availability model
- Venue-owner pilot intake interface
- How-it-works page
- VenueFind social preview asset

The displayed venue profiles are clearly labelled samples. Live venue records, form persistence, staff administration, and media uploads are the next implementation stage.

## Technology

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- ESLint

## Requirements

- Node.js 20.9 or newer
- npm 10 or newer

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

Run everything with:

```bash
npm run check
```

## Project structure

```text
app/
  page.tsx               Homepage and primary search
  venues/page.tsx        Venue catalogue
  how-it-works/page.tsx  Availability and service explanation
  list-venue/page.tsx    Venue partner intake
  layout.tsx             Metadata and typography
  globals.css            Design system and responsive styles
outputs/
  VenueFind_Concept_Note.md
  VenueFind_Stage_1_Implementation_Plan.md
public/
  og.png                  Social sharing image
```

## Environment configuration

Copy `.env.example` to `.env.local` when environment-backed services are introduced. Never commit `.env.local` or production secrets.

## Product boundaries

Stage 1 does not include instant booking, payment collection, hotel-room reservations, public ratings, or automated owner payouts. Refer to the documents in `outputs/` for the agreed operating model and build sequence.

## Repository setup

After creating an empty GitHub repository:

```bash
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Do not initialize the GitHub repository with a README, licence, or `.gitignore`; those files already exist here.
