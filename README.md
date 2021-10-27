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



