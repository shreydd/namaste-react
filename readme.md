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

### What is the difference between Named export, Default export and * as export?
**Named export:**

In Title.js
```js
export const Title = () => {
    return <div>title</div>
}
```

While importing it 
```js
import {Title} from './components/Title'
```
We need to specify the component we need using `{...}`


**Default Export:**
In Title.js
```js
const Title =() => {
    return <div>Title</div>
}
export default Title;
```

While importing it
```js
import Title from './components/Title';
```
We need not use the same name we used in the default export, we can use a different name as well but it's a good practice to keep things similar as it makes it more readable and easier to understand.


**import * as:**
In the Title.js file, if you have numerous exports we can avoid writing multiple lines of import declarations and import everything like this
```js
import * as obj from './components/Title'
```
And then use `obj` to reference what we need
```js
const title = obj.Title
const words = obj.Words
```


### What is the importance of config.js file?
During development we might have many variables / values / links that might need to be hard-set / hardcoded and replaced later on. Going around the code and replacing in each and every place is an unreliable and tedious process. So to make this process simpler we use a `config.js or constants.js` file where we store all the values references that may change depending on the environment. Ex: external cloud hosted image links, developer API keys and so on.


### What are react hooks?
Hooks are nothing but a function dedicated to do a specific task. They let you use state and other React features without writing a class.
Read: https://reactjs.org/docs/hooks-intro.html


### When would I use a Hook? 
If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component
Read: https://reactjs.org/docs/hooks-state.html


### Why do we need a useState Hook?
useState hook allows us to update and re-render a value on the UI without any confusion. It provides us a variable and a method dedicated to a value / variable that helps us avoid any mis-match while updating the code / UI.


### What does calling useState do? 
It declares a “state variable”. This is a way to “preserve” some values between the function calls — useState is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.
Read: https://reactjs.org/docs/hooks-state.html