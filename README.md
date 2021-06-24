# dfinity_reactJs_reactRouter_babel

A template that includes Dfinity, ReactJS, React-Router with the possibility of launching a local server.

## Prerequisites

* [Dfinity sdk](https://dfinity.org/developers)
* npm

## Recipe to create the project by hand

### Create a projet using dfx

`dfx new <project name>`

### In the project folder

Install webpack and dev server

`npm i webpack webpack-cli webpack-dev-server --save-dev`

Install loaders 

`npm i css-loader style-loader html-webpack-plugin --save-dev`

`npm i @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime --save-dev`

Install react

`npm i react react-dom react-router-dom`

## Modify files

**package.json** add command _start_


```javascript
"scripts": {
    "build": "webpack",
    "start": "webpack serve --mode development --open 'firefox'"
  },
```

**webpack.config.js** add module


```javascript
module: {
      rules: [
        { 
          test: /\.css$/,
          use: ['style-loader','css-loader']
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ]
    },
```

Create **babel.config.json**
`touch babel.config.json`

**babel.config.json** add content
```javascript
{
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
}
```

Add or update front-end files in _./src/\<project name\>_assets/src/_

Take care of *greeting.jsx* by updating _import_ and _Actor.createActor_

Use command `dfx deploy` or `npm start`