# Namaste React 
An 8 week bootcamp on react.js. This is an assignment for the first lesson

### What is emmet?
It's a customisable snippets which allows for faster writing. Commonly used code snippets are modified as per our requirement using it's own custom abbrivations and generates full-fledged code. This allows us to move faster while developing applications.

### What is the difference between a Library and Framework?
A library is like a plug and play tool which you can use where ever specifcally you would like it to be used. 
A framework is like a blueprint which needs to be followed for proper usage as the flow of control is not in the developer's hand for the most part. 

### What is a CDN and why do we use it?
CDN stands for `Content Delivery Network` which is a set of servers distributed geographically that can transfer files at higher speeds. These files are optimised extensively due to which there will be minimal lag while loading the content requested by the user.

### Why is React known as React?
```
Realizing that FBolt wouldn’t be a great name for the library when used on its own, Jordan Walke and Tom Occhino decided on a new name: “React.” After Tom sent out the diff to rename everything to React, Jordan commented:

    Jordan Walke: I might add for the sake of discussion, that many systems advertise some kind of reactivity, but they usually require that you set up some kind of point-to-point listeners and won’t work on structured data. This API reacts to any state or property changes, and works with data of any form (as deeply structured as the graph itself) so I think the name is fitting.
```
Source: https://reactjs.org/blog/2016/09/28/our-first-50000-stars.html#fbolt-is-born

### What is crossorigin in the script tag?
It provides support for CORS by defining how the element handles cross-origin requests, thereby enabling the configuration of the CORS requests for the element's fetched data. 

### What is the difference between React and ReactDOM?
React is the core library and reactDOM is the set of APIs that allow use to perform UI operations on the web.

### What is the difference between react.development.js and react.production.js files via CDN?
The react.development.js CDN link provides library files appropriate for the development environment while the other provides a minified js file which can be appropriate for production environment.

### What is async and defer?
If a script tag has async attribute:
The script content is fetched while the html content is being parsed, once the script is loaded it pauses the html parsing, executes the js and then proceeds with the html parsing

If it has a defer tag:
The script content is loaded simultaneously with the html parsing, once the parsing operation is done the js is then executed.
Refer: https://www.youtube.com/watch?v=IrHmpdORLu8
