# Purpose:

Setup and practice Node js coding

## Reference:

https://www.robinwieruch.de/minimal-node-js-babel-setup

https://babeljs.io/docs/en/next/babel-cli

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

## Install babel cli

```
npm install --save-dev @babel/cli
```

## Setup npm registry

```
npm config set registry https://registry.npmjs.com/
```

## Create .npmrc file

```
//.npmrc
// Create auth token by logging into npm and replace AUTH-TOKEN with it.
registry=https://registry.npmjs.com/AUTH-TOKEN/santosharakere/
```

## Login to npm

```
npm login
```

## Publish package

```
npm publish
```

## Use the published package in a new npm package.

## Install babel package for Class support. And enable Class Properties.

```
npm install --save-dev @babel/plugin-proposal-class-properties
```

## Debug using launch json

```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [{
        "name": "Launch via npm",
        "type": "node",
        "request": "launch",
        "cwd": "${workspaceFolder}",
        "runtimeExecutable": "npm",
        "runtimeArgs": ["run", "debug"],
        "port": 9229
    }]
}
```
### Setup Jest
https://medium.com/@ryanblahnik/setting-up-testing-with-jest-and-node-js-b793f1b5621e
```
npm install --save-dev jest
```
### Setup and Configure Sonar Cloud
create a file sonar-project.properties


