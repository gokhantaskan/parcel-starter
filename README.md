# Parcel Starter

My Parcel.js boilerplate with SASS, PostCSS, and TypeScript support.

Live demo: https://silly-bassi-fc5939.netlify.com/

```js
"devDependencies": {
  "@babel/core": "^7.7.5",
  "@babel/preset-env": "^7.7.6",
  "@types/svg-injector": "0.0.27",
  "@typescript-eslint/parser": "^2.11.0",
  "autoprefixer": "^9.7.3",
  "eslint": "^6.7.2",
  "parcel-bundler": "^1.12.4",
  "parcel-plugin-structurize": "^1.1.6",
  "postcss": "^7.0.24",
  "postcss-url": "^8.0.0",
  "sass": "^1.23.7",
  "svg-injector": "^1.1.3",
  "typescript": "^3.7.3"
}
```

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

Before create a production build:

```sh
npm run clear
```

To create a production build:

```sh
npm run build
```

To lint and fix files (with typescript support):

```sh
npm run lint
```

## Running

```sh
node dist/bundle.js
```
