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

### How to create nested routes with `react-router-dom`'s configuration?
```js
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/about',
                element: <About />,
                children: [
                    {
                        path: 'profile', // will work like: localhost:1234/about/profile
                        element: <Profile />
                    }
                ]
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:id',
                element: <RestaurantDetails />
            }
        ]
    }
])
```


### Explain createHashRouter and createMemoryRouter
**createMemoryRouter:**
If you require running React router in a non-browser environment then this can help us manage a history stack in memory, Instead of using the browsers history a memory router manages it for us.
Read: https://reactrouter.com/en/main/routers/create-memory-router

**createHashRouter:**
This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".

On why it's not a recommended approach:
<HashRouter> is for use in web browsers when the URL should not (or cannot) be sent to the server for some reason. This may happen in some shared hosting scenarios where you do not have full control over the server. In these situations, <HashRouter> makes it possible to store the current location in the hash portion of the current URL, so it is never sent to the server.

Read: https://stackoverflow.com/questions/74199357/why-hashrouter-in-react-router-v6-is-not-recommended



### What is the order of life cycle method calls in class based components?

There are mainly 2 phases and 3 processes, `Render phase` and `Commit phase`. The components also go through a process of `mounting`, `updating` and `unmounting`

**During mounting:** constructor -> render -> update the DOM and refs -> ComponentDidMount

**During updating:** New props / setState() / forceUpdate() -> render -> update the DOM and refs -> ComponentDidUpdate

**During unMounting:** ComponentWillUnmount

Everything before the `updation of DOM and refs` falls under the render phase, everything after is under commit phase.

Refer: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


### Why do we use ComponentDidMount?
There will be cases where we need to know if a component has been mounted on the DOM, when it does we can update it with the required UI. Ex: Showing shimmer UI when data is being loaded in the background. This helps us provide a better user experience.


### Why do we use ComponentWillUnmount? Show with example
When setting background processes relevant only when a particular component is mounted / visible to the user, often times those are not handled properly and will trigger multiple processes of the same task resulting in unnecessary load on the processor. With the help of `ComponentWillUnmount` we can make sure that unnecessary tasks are handled when it's not required.

Ex: if we do a setTimeout in ComponentDidMount, everytime the component is unmounted and mounted again, multiple setTimeout process is triggered without handling the previous ones. This can be an issue in large scale applications. To handle this we can

```js

componentDidMount() {
    this.timer = setInterval(() => {
        console.log("react namaste")
    }, 1000);
}

componentWillUnmount() {
    clearInterval(this.timer);
}
```





### Why do we use super(props) in a constructor?
We need to understand what a constructor is, it's a method that is automatically called when an object of the respective class is created.

To set property or use 'this' inside the constructor it is mandatory to call super().

Read: https://www.knowledgehut.com/blog/web-development/understanding-constructors-with-react-components


### Why can't we have the callback function of useEffect as an async?
Async functions implicitly return a promise while the useEffect expects its callback to either return nothing or a clean-up function.
Read: https://www.designcise.com/web/tutorial/why-cant-react-useeffect-callback-be-async