# Purpose:

Setup and practice Node js coding

## Reference:

https://www.robinwieruch.de/minimal-node-js-babel-setup

## Initialize using yarn

```
yarn init
```

## Install Packages and Setup babel:

Install babel core and preset.

```
npm install @babel/core @babel/node --save-dev
npm install @babel/preset-env --save-dev
```

`babel-node` is a CLI that works exactly the same as the Node.js CLI, with the added benefit of compiling with Babel presets and plugins before running it.

---

Enable the preset by creating a `.babelrc` file:

```
{
  "presets": ["@babel/preset-env"]
}
```

Install `nodemon`, a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

```
npm install --save-dev nodemon
```
