# Mithril - Vite - TSX

This repository attempts to use the JSX notation with Mithril and TypeScript, with Vite as the bundler.

## Setup

The repository was created by the following steps:

1. Execute the following commands:
```
npm init vite@latest mithril-vite-tsx -- --template vanilla-ts
cd mithril-vite-tsx
npm i mithril --save
npm i @types/mithril --save-dev
```

2. Edit the index.html: Remove the #app element, as we are not going to use it. Then point the script towards `/src/main.tsx `.

3. Add App.tsx (see the file for content).

4. Rename main.ts to main.tsx, and set it up to mount the app on `document.body` (see the *main* file).