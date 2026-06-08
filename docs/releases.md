# CLIKKO Releases

CLIKKO uses semantic versioning:

```text
MAJOR.MINOR.PATCH
```

Examples:

```text
v0.1.0
v0.1.1
v0.2.0
v1.0.0
```

The app version is tracked in `package.json`. Expo reads that version through
`app.config.js`, so the release version has a single source of truth.

## Required GitHub Secret

Add this repository secret before tag-triggered EAS builds:

```text
EXPO_TOKEN
```

Create the token from your Expo account settings, then add it in:

```text
GitHub repository -> Settings -> Secrets and variables -> Actions -> New repository secret
```

## Patch Release

```bash
npm run version:patch
git push origin main --follow-tags
```

## Minor Release

```bash
npm run version:minor
git push origin main --follow-tags
```

## Major Release

```bash
npm run version:major
git push origin main --follow-tags
```

## First v0.1.0 Release

If `package.json` is already at `0.1.0`, create and push the first release tag:

```bash
git tag v0.1.0
git push origin main
git push origin v0.1.0
```

That tag push triggers:

- GitHub Release creation with generated release notes
- Android APK build through the EAS `preview` profile
- Android AAB build through the EAS `production` profile

## EAS Build Profiles

- `development`: internal development client
- `preview`: internal Android APK
- `production`: Android app bundle

Run these manually when needed:

```bash
npx eas-cli build --platform android --profile preview
npx eas-cli build --platform android --profile production
```

Before the first cloud build, the Expo project must be linked to EAS with:

```bash
npx eas-cli init
```

Commit the generated EAS project metadata if the command updates the Expo config.
