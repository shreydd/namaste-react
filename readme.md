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

### When and why do we need lazy()?
The `lazy()` function will allow us to load components / pages on demand. When applications scale / grow bigger, the bundle size gets heavier causing a lot of time on initial load. To avoid that we can use this function to only load components when required by the user.


### What is suspense?
<Suspense> lets you display a fallback until its children have finished loading.

When you are loading your components it takes time to get the full bundle and render it, in this gap of time react tries to suspend the operation since it’s trying to render something that isn’t existing yet, for this we use Suspense.


### Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?
This error occurs when we try to lazy load a component but 

a) the component takes about a sec to load as it requires to be called from the server

b) react suspends the operation if anything is missing / not there during rendering

So to combat this we use <Suspense> which allows us to display a fallback until its children have finished loading.



### What are the Advantages and disadvantages of using this code splitting pattern?
Advantages of Lazy Loading

    Reduces initial loading time by reducing the bundle size.
    Reduces browser workload.
    Improves application performance in low bandwidth situations.
    Improves user experience at initial loading.
    Optimizes resource usage.

Disadvantages of Lazy Loading

    Not suitable for small-scale applications.
    Placeholders can slow down quick scrolling.
    Requires additional communication with the server to fetch resources.
    Can affect SEO and ranking

Read: https://www.syncfusion.com/blogs/post/lazy-loading-with-react-an-overview.aspx



### When and Why do we need Suspense?
When we are using lazy loading then we will need Suspense to show fallback content until the component is loaded completely. We need suspense so that react doesn't skip over / not render / suspend the ops of a component while it's still loading.