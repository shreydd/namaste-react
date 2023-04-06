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

> Note: have Only put up theory stuff from here for the rest of the course, redux code / methods has been saved in notion

### useContext vs Redux
useContext:
    - Specifically designed for static data, that is not often refreshed or updated
    - UI logic and State Management Logic are in the same component
    - Debugging can be hard in highly nested React Component Structure even with Dev Tool

Redux:
    - Works like a charm with both static and dynamic data
    - Incredibly powerful Redux Dev Tools to ease debugging
    - Better code organization with separate UI logic and State Management Logic


Ref: https://dev.to/ruppysuppy/redux-vs-context-api-when-to-use-them-4k3p



### Advantage of using redux toolkit over redux
Redux Toolkit makes it easier to write good Redux applications and speeds up development


### Explain Dispatcher
Dispatch:​ The Redux store has a method called dispatch . The only way to update the state is to call store.dispatch() and pass in an action object like `dispatch(addItem(43))`. The store will run its reducer function and save the new state value inside, and we can call getState() / useSelector() to retrieve the updated value of the store.


## Explain Reducer
A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.

ref: https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#reducers



### Explain slice
A slice is the portion of Redux code that relates to a specific set of data and actions within the store 's state

ref: https://www.codecademy.com/learn/fecp-redux/modules/core-redux-api/cheatsheet


### Explain Selector
It is used to access the data in a slice of our redux store


### Explain createSlice and the config it takes

To make a section of sorts for a set of particular data, we `createSlice` in the following manner
```js
import {createSlice} from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: () => {
            // func stuff
        }
    }
})

export const {addItem} = cart.actions;

export default cart.reducer;
```

It takes a name to identify, an initialState to provide default values and reducer functions to perform actions on the data we store. 