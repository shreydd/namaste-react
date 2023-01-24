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

### What are the various ways to add images into an App? Explain with code examples

1. Create a folder to add images and import it
```js
import Logo from "/assets/images/Meshi.svg";

const ImgComp = () => {
    return(
        <img src={Logo} className="logo" alt="Logo" />
    )
}

export default ImgComp;
```

2. Host it on a CDN and refer to it in the `src` of img tag
```js
const ImgComp = () => {
    return (
        <img className="logo" alt="logo" src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"/>
    )
}
export default ImgComp;
```


### What would happen if we do `console.log(useState())`?
We get this 
```js
Array [ undefined, dispatchSetState() ]
```
useState is nothing but a hook which is returning a local state variable and a function to update that variable


### How will `useEffect` behave if we don't add a dependency array?
the callback function will be fired each time a render is triggered


### What is an SPA?
SPA: Single page applications are client side rendering applications which do not rely on the servers to render different pages, SPAs do it on the client side / user's machine.


### What is the difference between Client Side Routing and Server Side Routing?
CSR: the whole app is bundled and shipped to the client's browser, so the pages rendering and other ops are done on the user's machine

SSR: Some parts are bundled in the client app and others are on the server, things like different pages are rendered on the server and served to the user when requested