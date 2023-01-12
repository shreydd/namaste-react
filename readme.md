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

### Is JSX mandatory for react?
No. But it's a good practice to use it as code is for humans to understand well enough for making changes.

### Is ES6 mandatory for react?
No. But it enables us to write better code faster and easily.

### `{TitleComponent}` VS `<TitleComponent/>` VS `{<TitleComponent></TitleComponent>}` in JSX
`{TitleComponent}` allows us to use normal JS as well with in the `{...}` brackets.

`<TitleComponent/>` is often used by the industry and allows us to pass props.

`{<TitleComponent></TitleComponent>}` is also a valid JSX expression.

### How can to write comments is JSX?
If you want to comment something in JSX you need to use JavaScript comments inside of Curly braces like `{/*comment here*/}`.

### What is <React.Fragment></React.Fragment> and <></>?
A common pattern in React is for a component to return multiple elements. React.Fragment lets you to group a list of children without adding extra nodes to the DOM.

So instead of having one wrapper parent element we can use this to avoid having it.
```js
const Component = () => {
    return(
        <React.Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </React.Fragment>
    )
}

```

`<></>` is a shorthand notation for it.

Source: https://reactjs.org/docs/fragments.html


### What is a Virtual DOM?
Virtual DOM is a representation of the actual DOM element tree. It is used to find out the different elements that need to be updated / re-rendered.


### What is Reconciliation in react?
It is the process where react uses a diffing algorithm to compare a tree from another (DOM and Virtual DOM trees) and update the necessary parts.

Read more: https://reactjs.org/docs/reconciliation.html


### What is React Fiber?
React Fiber is an ongoing reimplementation of React's core algorithm. It is the culmination of over two years of research by the React team.

The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

It is a new Reconciliation engine introduced in React-16 and it's mainly responsible for diffing of the two trees

Read more: https://github.com/acdlite/react-fiber-architecture


### Why and when do we need keys?
If a node has multiple similar child elements, it would be difficult to update the necessary element which might lead to re-rendering the whole node. So to improve the performance we use UNIQUE keys. This will allow the library to know which child element needs the necessary action and so this approach is a better method for rendering the UI.


### Can we use index as keys?
There may be instances when we may not be able to get unique keys. At that point we may consider using an index provided by map function (or foreach) only if:

    - the list and items are static–they are not computed and do not change
    - the items in the list have no ids;
    - the list is never reordered or filtered.

When all of them are met, you may safely use the index as a key.

But why?

If you add a new item to the state and sort / map it, react can get confused about which property is for which component and present an incorrect UI.

Read: https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/


### What is and what are the ways to use props in react?
Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

Wrapping under `props`
```js
const childComp = (props) => {
    return(
        <div>
            {props.data}
        </div>
    )
}

const AppComp = () => {
    return{
        <div>
            <childComp data="hello" />
        </div>
    }
}
```

Destructuring right at the function parameters
```js
const childComp = ({data}) => {
    return(
        <div>
            {data}
        </div>
    )
}

const AppComp = () => {
    return{
        <div>
            <childComp data="hello" />
        </div>
    }
}
```

using spread operator
```js
const RestaurantCard = ({name, cuisines, deliveryTime, cloudinaryImageId}) => {
    return(
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="restaurant img" />
            <h4>{name}</h4>
            <p>{cuisines.join(", ")}</p>
            <p>{deliveryTime} mins</p>

        </div>
    )
}

const Body = () => {
    return(
        <main className="restaurant-list">
            {
                RestaurantsData.map((cards) => {
                    return cards.cards.map((res) => {
                        return <RestaurantCard key={res.data.data.id} {...res.data.data} />
                    })
                })
            }
        </main>
    )
}
```


### What is a config driven UI?
A config driven UI is a way to control the interface with specific parameters that can be changed from the backend. This allows us to prvide a more dynamic view curated for users.