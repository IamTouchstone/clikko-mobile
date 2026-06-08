# CLIKKO Mobile

CLIKKO is a multi-tenant workforce attendance mobile app built with Expo SDK 54,
Expo Router, React Native, TypeScript, Zustand, React Query, and mock data that is
ready for future Node/Express and Supabase integration.

## Local Development

Install dependencies:

```bash
npm install
```

Start Expo:

```bash
npm start
```

Run checks:

```bash
npm run lint
npm run typecheck
```

## Expo Go

Run the development server:

```bash
npm start
```

Scan the QR code with Expo Go. The app currently uses mock authentication and
mock attendance data.

Demo credentials:

```text
Email: admin@demo.com
Password: Password123
```

## Architecture

Routes live in `src/app`, which Expo Router supports natively. Non-route code is
kept outside the routing tree:

```text
src/
  app/
  api/
  config/
  components/
  features/
  hooks/
  mocks/
  navigation/
  providers/
  services/
  store/
  theme/
  types/
  utils/
```

Route files render screens and handle navigation. Business logic lives in
feature folders and mock services.

## GitHub Actions

CI runs on pushes and pull requests:

```text
npm ci
npm run lint
npm run typecheck
```

Tag pushes matching `v*` trigger:

- GitHub Release creation
- Generated release notes
- Android APK build through EAS `preview`
- Android AAB build through EAS `production`

## Release Process

Patch release:

```bash
npm run version:patch
git push origin main --follow-tags
```

Minor release:

```bash
npm run version:minor
git push origin main --follow-tags
```

Major release:

```bash
npm run version:major
git push origin main --follow-tags
```

First release when `package.json` is already `0.1.0`:

```bash
git tag v0.1.0
git push origin main
git push origin v0.1.0
```

## APK Generation

GitHub Actions generates the APK on `v*` tag pushes using:

```bash
npx eas-cli build --platform android --profile preview --non-interactive --wait
```

Manual APK build:

```bash
npx eas-cli build --platform android --profile preview
```

Manual AAB build:

```bash
npx eas-cli build --platform android --profile production
```

## Required Secrets

Add this GitHub Actions repository secret:

```text
EXPO_TOKEN
```

Before the first EAS cloud build, link the project:

```bash
npx eas-cli init
```

See [docs/releases.md](docs/releases.md) for the full release runbook.
