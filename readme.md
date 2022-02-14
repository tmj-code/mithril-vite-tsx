# Mithril - Vite - TSX

This repository attempts to use the JSX notation with Mithril and TypeScript, with Vite as the bundler.

## Setup

The repository was created by the following steps:

1. Execute the following commands (omit the last one if you do not use VSCode as editor):
```
npm init vite@latest mithril-vite-tsx -- --template vanilla-ts
cd mithril-vite-tsx
npm i mithril --save
npm i @types/mithril --save-dev
code .
```

2. Edit the index.html: Remove the #app element, as we are not going to use it. Then point the script towards `/src/main.tsx `.

3. Add GreenText.tsx (see the file for content).

4. Add App.tsx (see the file for content).

5. Rename main.ts to main.tsx, and set it up to mount the app on `document.body` (see the *main* file).

6. Edit tsconfig.json: Add `"jsx": "preserve"`.

7. Add vite.config.js (see the file for content).

8. Execute `npm run dev`.

## The problem

You can now open the browser on the specified URL (probably http://localhost:3000), and see a greeting in two colors. The solution as such works.

However, you may notice that the file App.tsx has an error in it. More specifically, the `<GreenText>` component is considered invalid *even though it works fine in the browser*. The consequence is that you cannot build the bundled files using `npm run build`.

The error message is:
```
'GreenText' cannot be used as a JSX component.
  Its return type 'Component<{}, {}>' is not a valid JSX element.
    Type 'Component<{}, {}>' is missing the following properties from type 'Vnode<{}, {}>': tag, attrs, state
```
