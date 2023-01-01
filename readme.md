# Namaste React 
An 8 week bootcamp on react.js. This is an assignment for the second lesson

> This repo consists of parcel and other dependencies to build a react app

```
npm start
``` 
This will start a live server (powered by parcel)

```
npm run build
```
This will generate a production ready build version

# Assignment questions

### What is NPM?
NPM is a node modules package manager which helps us to organise our packages used for development of our app. It necessarily does not stand of `Node Package Manager` but ultimately does the job implied by it.

### What is parcel / webpack?
Parcel is a zero config build tool. We need these tools for building minified and scalable web applications as they reduce the complexity of building them for the developers. Webpack is also a build tool with a few differences. These tools offer more features that are beneficial for the rendering of the app.

### What is .parcel-cache?
This is a folder created by parcel where it can store it's files necessary for it's operations.

### What is npx?
It is a command used to execute js packages in the environment

### What is the difference between dependencies and devDependencies?
devDependencies: Modules / packages required only during development 
Dependencies: Modules / packages required at runtime / live production

### What is tree shaking?
As per MDN
```
Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.

In modern JavaScript applications, we use module bundlers (e.g., webpack or Rollup) to automatically remove dead code when bundling multiple JavaScript files into single files. This is important for preparing code that is production ready, for example with clean structures and minimal file size.
```

### What is Hot Module Replacement?
Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without requiring a full reload.
Ream more about it here: https://webpack.js.org/concepts/hot-module-replacement/

### Abilities of Parcel
* Creates A Server with HMR for a better dx
* Uses File Watcher algorithm
* BUNDLING for making our app production ready
* MINIFIES the files for better performance
* Cleans our Code (eg: removes unnecessary console.log)
* Provides Dev and Production Build
* Super Fast build algorithm
* Image Optimization
* Caching while development
* Compression of data on the fly
* Compatible with older version of browser
* HTTPS on dev
* port Numbers are handled automatically
* Content Hashing Algorithm for optimising production builds
* Zero Config at the beginning
* Parcel has a plugin for everything. From transforming files, to resolving dependencies, to bundling and optimizing – everything is customizable.

### Some of the highlights of parcel (my favourites)
Content hashing: Including a hash of a bundle’s contents is an important optimization for production builds that enables browsers to cache loaded files indefinitely. When the contents of a bundle changes, so does its filename, which acts as a cache invalidation mechanism. See the Content hashing docs for details about this.

Transpilation: Parcel transpiles your JavaScript and CSS for your target browsers automatically! Just declare a browserslist in your package.json, and Parcel takes care of transpiling only what's needed.

Code splitting: When multiple parts of your application depend on the same common modules, they are automatically deduplicated into a separate bundle. This allows commonly used dependencies to be loaded in parallel with your application code and cached separately by the browser!

Code splitting is also supported for CSS. If you import CSS from your JavaScript, a sibling CSS bundle will be produced and loaded in parallel with the JS bundle.

Image optimization: Parcel supports resizing, converting, and optimizing images! Just pass query parameters for the format and size you need when referencing the image file in your HTML, CSS, JavaScript, etc. and Parcel will take care of the conversion and optimization process.

Multi core: Parcel is designed around a multi-core architecture that parallelizes work across all of your cores and takes full advantage of modern hardware.

### What is .gitignore? What should we add and not add into it?
It's file used to specify files and folders which need not go onto the hosted github repo. Files which can be auto generated are specified in the git ignore file so that it's easier to clone repos and host them. By auto generated we mean node_modules, build files and such

### What is the difference between `package.json` and `package-lock.json`?
package.json: contains basic information about the project
package-lock.json: contains the exact info of the whole project. ex: the exact version of libraries used to build the project

### Why should I not modify `package-lock.json`?
Modifying this file will lead to messed up production / development builds leading to numerous issues. It's generally good practice to let the machine handle itself.

### What is `node_modules` ? Is it a good idea to push that on git?
This is where all our node dependencies are stored. Without it the project cannot function. It is generally auto generated on the server so we do not need to push it on the git.

### What is the `dist` folder?
This is where our build files are stored. 

### What is browserslist?
We use this to specify which version of the browsers we are targetting so that our bundler can optimise the build files to suit them thus making it compatible.

### difference between 
- vite: Vite is an opinionated superset of Rollup. In a nutshell, Vite is a wrapper around Rollup that aims to improve performance by leveraging JavaScript tools written in compile-to-native languages. And for this, Vite uses ES build under that hood.

- webpack: Webpack is the swiss army knife of JavaScript module bundlers and it is an advanced tool that ships out of the box with an overwhelming amount of features. And this can make Webpack difficult to learn.

- parcel: Parcel is a plug-and-play module bundler that requires zero configuration. It is a beginner-friendly bundler that focuses on simplicity and works out of the box.

Read more here: https://blog.sessionstack.com/how-javascript-works-a-guide-to-build-tools-exploring-webpack-parcel-rollup-es-build-and-2089bcf0ddb4

### Difference between ^ and ~ in package.json
Generally, a package follows a naming convention as follows
```
"package": "MAJOR.MINOR.PATCH"
```
This means that PATCHes are bug fixes and MINORs add new features but neither of them break what worked before. Finally, MAJORs add changes that won’t work with earlier versions.

A tilde (~) upgrades the patch while a caret (^) the minor version so that we can have newer features that would not break the code.

### Script types
- module: This value causes the code to be treated as a JavaScript module. The processing of the script contents is deferred. The charset and defer attributes have no effect.

- importmap: This value indicates that the body of the element contains an import map. The import map is a JSON object that developers can use to control how the browser resolves module specifiers when importing JavaScript modules. 