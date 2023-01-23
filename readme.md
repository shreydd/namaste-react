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

### What is a microservice?
A self-contained piece of business function which is vital for the working of a whole system. Microservices are an architectural pattern of coupling multiple standalone-ish services together which communicate with each other to work as a singular whole system, made to achieve a business goal.


### What is a monolith architecture?
A software system where different functions like data processing, error handling, UI etc are all interwoven rather than containing architecturally separate components is called a monolith architecture.


### Describe the differences between microservices and monolith architectures.
A monolithic application is built as a single unified unit while a microservices architecture is a collection of smaller, independently deployable services.
Read: https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith


### Why do we need a useEffect Hook?
There are many occassions when we need to update the UI based on some changes or due to a new input (in the UI, upon fetch operation completion etc), this is where useEffect allows us to operate side missions and complete the task as accurately as we require it to.


### What is optional chaining?
The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called is undefined or null, it returns undefined instead of throwing an error.
Read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining


### What is shimmer UI?
A loading screen which mimics the UI representation of the application which is being loaded onto the screen, this helps in reducing the cognitive load on a user.


### What is the difference between a JS expression and a JS statement?
At its core, an `expression` is a bit of JavaScript code that produces a value while a `statement` is a collection of expressions of sorts. A JavaScript program is a sequence of statements. Each statement is an instruction for the computer to do something. 
Read: https://www.joshwcomeau.com/javascript/statements-vs-expressions/


### Explain with a code example about Conditional Rendering
Conditional Rendering is where we output the UI components based on values / conditions.
```js
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {    
    return <UserGreeting />;  
  }  
  return <GuestGreeting />;
}
const root = ReactDOM.createRoot(document.getElementById('root')); 
// Try changing to isLoggedIn={true}:
root.render(<Greeting isLoggedIn={false} />);
```

Here's a better way of handling conditional rendering using ternary operators like `condition ? true : false`

```js
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.    </div>
  );
}
```


### What is CORS?
Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
Read: https://auth0.com/blog/cors-tutorial-a-guide-to-cross-origin-resource-sharing/


### What is async and await?
We use the `async` funtion to return a `promise`, The keyword await makes JavaScript wait until that promise settles and returns its result.
Read: https://www.theodinproject.com/lessons/node-path-javascript-async-and-await


### What is the use of `const json = await data.json()` in getRestaurants()?
The response object, returned by the await fetch(), is a generic placeholder for multiple data formats. `data.json()` is a method on the Response object that lets you extract a JSON object from the response. The method returns a promise, so you have to wait for the JSON. 
Read: https://dmitripavlutin.com/javascript-fetch-async-await/
