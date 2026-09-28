# Trader Zone architecture overview

## Product goals

Trader Zone is a mobile-first and web-ready communication product for trading communities. It is designed around private messaging, realtime groups, moderation, community channels, and voice/video collaboration without turning into a generic social platform.

## Stack

- Web: Next.js + App Router + TypeScript + Tailwind
- Mobile: React Native + Expo + TypeScript
- Admin: Next.js dashboard
- Backend: Supabase PostgreSQL, Auth, Realtime, Storage, RLS
- Voice/video: LiveKit
- State: TanStack Query and Zustand

## Core domains

1. Identity and access
   - Authenticated users, profiles, roles, permissions, sessions.
2. Messaging and communities
   - Private conversations, group chats, communities, channels, permissions.
3. Media and files
   - Storage-backed media uploads, signed URLs, image resizing, overhead protections.
4. Real-time collaboration
   - Presence, read status, typing indicators, notifications, live rooms.
5. Moderation and governance
   - Reports, blocks, bans, audit logs, owner/admin safeguards.
6. Voice and video
   - Live rooms, private calls, group conferences, screen sharing.

## Recommended implementation rules

- Keep database logic in Supabase/Postgres, not in the UI layer.
- Enforce permissions through RLS and server-side checks.
- Use signed URLs for private media instead of long-lived public exposure.
- Use Supabase Realtime for presence and message updates.
- Use LiveKit only for streaming features, with server-generated tokens.
- Avoid static mock data in production facing flows.

## MVP milestones

- Authentication and profile setup
- Community and channel access controls
- DM and group messaging
- Reactions and replies
- Media/file handling
- Push notifications and presence
- Voice room and private call scaffolding
- Admin dashboard and moderation workflows

## Future extensions

- Market dashboard
- Economic calendar
- Trading journal
- Daily bias workspace
- Education modules and trading challenges

## Security requirements

- RLS must gate all access to communications and media.
- Never trust client-side permission checks.
- Validate uploads by user, file type, and file size.
- Never expose LiveKit secrets to the frontend.
