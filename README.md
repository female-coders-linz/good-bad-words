# Good Bad Words

A sample project with React and Material to showcase how you can build a small app step by step.

## Set up 

React offers great starter projects with the `create-react-app` script. 
We will use their template to create a [progressive webapp](https://www.freecodecamp.org/news/what-are-progressive-web-apps/) with [TypeScript](https://www.typescriptlang.org/). 
Let's run the following command in our terminal

`npx create-react-app good-bad-words --template cra-template-pwa-typescript`

When we run this command successfully, the following structure is created
```
- node_modules
- public 
- src
- package.json
- tsconfig.json
```

The `node_modules` folder contains all the dependencies that we list in `package.json`, the `tsconfig.json` is the configuration for our TypeScript compiler that will translate our TypeScript files to plain JavaScript. 
The `public` folder contains all our static assets - images, logos, etc, an `index.html` file that will be the entrypoint for our app.
The `src` folder contains all of our TypeScript resources.  

When we run `npm start` now in our folder the app starts up at `localhost:3000`. 

## Clean up

There are some files we won't need - the favicon and other react PNGs and the content of the `App.tsx`. 

One thing that we will need and is not yet there is [Material UI](). We will use predefined Material UI components for the styling of our app. We can add the dependency by running 

`npm install @mui/material @emotion/react @emotion/styled`

in our Terminal. When we do that some lines for the new dependcies are added to our `package.json`

```
{
  "name": "good-bad-words",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@emotion/react": "^11.5.0",
    "@emotion/styled": "^11.3.0",
    "@mui/material": "^5.0.6",
    ...
  }
  ...
}
```