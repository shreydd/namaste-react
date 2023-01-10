# Namaste React 
An 8 week bootcamp on react.js. This is an assignment for the second lesson

```
npm start
``` 
This will start a live server (powered by parcel)

```
npm run build
```
This will generate a production ready build version

# Assignment questions

### What is JSX?
It is a `syntax extension to javascript`. It has a html-like syntax which helps developers in familiarising the devloping with the code in a much simpler and faster manner. JSX get's converted into react elements by babel.

### Features of JSX

- **Can embed expressions** 
You can put any valid JavaScript expression inside the curly braces in JSX. For example, `2 + 2`, `user.firstName` or `formatName(user)` are all valid JavaScript expressions.

- **JSX is an expression too**
Use it within if and for statements, assign variables, accept it as an arguement as it complies to a js function call and evaluates to a js object.

- **Prevents from XSS attacks**
React DOM `escapes` any values embedded in JSX before rendering them. This means that any value a user might enter, such as `<` or `*` which are a common way to utilise and "inject" a script and exploit a site, can be avoided.
Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

- **JSX Represents Objects**
Babel compiles all these JSX expressions into react elements which in turn are just objects. React then reads these objects and converts them into a DOM element. 

Read more about these here: https://reactjs.org/docs/introducing-jsx.html


### What is the Role of type attribute in a script tag?

It is used to indicate the type of script. Depending on the type described, it'll either treat it as a classic js script or a js module. JS module scripts require the use of CORS protocol for cross-origin fetching. 


### What is the difference between {TitleComponent} vs {&lt;TitleComponent/&gt;} vs {&lt;TitleComponent&gt;&lt;/TitleComponent&gt;} in JSX

With `{TitleComponent}` we can run any valid javascript expression inside it

With `{<TitleComponent/>}` we can pass multiple props and keep the code cleaner

With `{<TitleComponent><TitleComponent/>}` we can nest more components?