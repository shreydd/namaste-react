# How to's
How to start a development server and build a production ready app.

```
npm start
``` 
This will start a live server (powered by parcel)

```
npm run build
```
This will generate a production ready build version

Make sure to use `npm install` if you are missing any packages or cloning this repo



# Assignment questions

### How do we configure tailwind?

refer for all frameworks it works on: https://tailwindcss.com/docs/installation/framework-guides


### In tailwind.config.js, what do the keys mean?
`content`: To specify the path where all the files are using tailwind. From the docs: The content section of your tailwind.config.js file is where you configure the paths to all of your HTML templates, JavaScript components, and any other source files that contain Tailwind class names.


`theme`: If you want to change things like your color palette, spacing scale, typography scale, or breakpoints, add your customizations to the theme section of your tailwind.config.js file

under themes: 
 - `screens`: Customizing the default breakpoints for your project.

 - `colors`: Customizing the default color palette for your project.

 - `spacing`: Customizing the default spacing and sizing scale for your project.



`plugins`: Plugins let you register new styles for Tailwind to inject into the user’s stylesheet using JavaScript instead of CSS.


`presets`: Creating your own reusable configuration presets.



refer: https://tailwindcss.com/docs/configuration



### Why do we have a .postcssrc file?
If you’re using Tailwind for a brand new project and don’t need to integrate it with any existing Sass/Less/Stylus stylesheets, you should highly consider relying on other PostCSS plugins to add the preprocessor features you use instead of using a separate preprocessor.

This has a few benefits:

    Your builds will be faster. Since your CSS doesn’t have to be parsed and processed by multiple tools, your CSS will compile much quicker using only PostCSS.
    
    No quirks or workarounds. Because Tailwind adds some new non-standard keywords to CSS (like @tailwind, @apply, theme(), etc.), you often have to write your CSS in annoying, unintuitive ways to get a preprocessor to give you the expected output. Working exclusively with PostCSS avoids this.