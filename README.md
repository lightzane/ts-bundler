# Webpack Typescript Bundler

This node project will help you bundle your `Typescript` file to generate `Javascript` file with declaration files that can help in HTML web development for intellisense suggestions or auto-completion for [vscode](https://code.visualstudio.com/)

## Getting Started

1. Place your source code in the `src` folder

`src/main.ts`

```ts
export class Sample {}
```

2. Update the following in `webpack.config.js`

- `entry` - your main entry point for your source code
- `filename` - the filename of the javascript to be generated
- `library.name` - your Namespace name

```diff
const config = {
+ entry: ['./src/main.ts'],
  output: {
+   filename: 'lightzane.js',
    path: path.resolve(process.cwd(), 'dist'),
    library: {
+     name: 'Lightzane',
      type: 'umd',
    },
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
```

## Bundle Your Typescript

> Make sure to delete `dist` folder before running the below command

```
npm start
```

This will generate the following files:

- `lightzane.d.ts`
- `lightzane.js`

Declare your namespace manually in the generated `.d.ts` file

```ts
declare namespace Lightzane {
  export * from 'main'; // usually the same name of your entry point
}
```

**Utilize the generated bundle in your `HTML` file**

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
  </head>
  <body>
    <script src="lightzane.js"></script>
    <script src="script.js"></script>
  </body>
</html>
```

`script.js`

```js
/// <reference path="lightzane.d.ts" />

const test = new Lightzane.Sample();
```

## Learn More

https://github.com/lightzane/webpack-typescript-bundler
