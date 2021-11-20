# dfinity_reactJs_reactRouter_babel

A recipe,template that includes Dfinity, ReactJS, React-Router.

## Prerequisites

* [Dfinity sdk version 0.8.4](https://dfinity.org/developers)
* npm

## Recipe to create the project by hand (best)

### Create a projet using dfx

`dfx new <project name>`

### In the project folder

Install loaders 

`npm i css-loader style-loader html-webpack-plugin --save-dev`

`npm i @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime --save-dev`

Install react

`npm i react react-dom react-router-dom`

### Modify files

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

update **package.json**

`npm outdated`

Modify accordingly.

### copy source files

Copy from repo. or adapt files in `/src/dfinity_reactJs_reactRouter_babel_assets` with reactjs.


## Recipe to create the project using template

1. Create and clone project from Github
1. Rename folder _/src/**dfinity_reactJs_reactRouter_babel**__assets_ with your <project name\>
1. Rename folder _/src/**dfinity_reactJs_reactRouter_babel**/_ with your <project name\>
1. Update name and description in **package.json**
1. Update **dfx.json** search for _**dfinity_reactJs_reactRouter_babel**_ and replace with your <project name\>
1. Update **webpack.config.js** search for _**dfinity_reactJs_reactRouter_babel**_ and replace with your <project name\>

Command `npm install`

Command `dfx deploy`

## Finally

Add or update front-end files in _./src/\<project name\>_assets/src/_

Take care of *wrapper.js* by updating _import_ and _Actor.createActor_

Use command `dfx deploy` or `npm start`

# Alternatives [(read forum)](https://forum.dfinity.org/)

* [Easiest way to get started with frontend. ...](https://forum.dfinity.org/t/easiest-way-to-get-started-with-frontend-templates-for-react-vue-svelte-based-on-vitejs/2589?u=rbolog)
* [How do I connect a React front-end with a Canister](https://forum.dfinity.org/t/how-do-i-connect-a-react-front-end-with-a-canister/2301?u=rbolog)
* Dfinity doc. [Add front-end assets](https://sdk.dfinity.org/docs/developers-guide/webpack-config.html)
* [Kyle Peacock dfx-template-react](https://github.com/krpeacock/dfx-template-react)
