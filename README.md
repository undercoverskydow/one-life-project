# Trader Zone

This repository contains the initial monorepo scaffold for Trader Zone, a premium private trading community and communication platform built for mobile and web.

## Included

- Web app: Next.js + App Router + TypeScript + Tailwind
- Admin app: Next.js admin dashboard skeleton
- Shared packages: UI and types foundations
- Supabase-ready schema and architecture docs
- Documentation for the platform, permissions, and security model

## Project structure

```text
trader-zone/
├── apps/
│   ├── web/
│   ├── admin/
│   └── mobile/
├── packages/
│   ├── ui/
│   ├── types/
│   ├── database/
│   ├── auth/
│   ├── messaging/
│   ├── realtime/
│   ├── calls/
│   └── utils/
├── supabase/
│   ├── migrations/
│   ├── functions/
│   └── seed/
├── docs/
├── package.json
└── README.md
```

## Getting started

```bash
npm install
npm run dev:web
```

For the app shell and the admin interface, the workspace is prepared for the multi-app monorepo layout described in the product brief.

## Design direction

The starter UI uses the required premium dark trading aesthetic:

- Dark background and neutral panels
- High-contrast typography
- Red accent for trading-focused branding
- Clean community layout consistent with a messaging app

## Notes

This repository establishes the architecture and starter codebase, while the product specification in the brief defines the full production roadmap for messaging, voice rooms, realtime, moderation, and Supabase+LiveKit integration.
