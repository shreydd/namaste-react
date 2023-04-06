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

### diff types of testing
- manual testing (done by humans manually)

- automated testing (code testing code)
    - selenium (full testing workflow)

- E2E testing (tests whole flow by simulating a user, covers entire user journey)
    - Cypress
    - Headless browsers are used (kind of an invisible browser, does not have a viewport)

- Unit testing (covers component like testing)
- Integration testing (testing the integration between comps)


### What is enzyme
Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.


### enzyme vs react testing library
 If you want mimic real-world user interactions, the React Testing Library is the way to go because you can do the same with fireEvent functions.

Meanwhile, Enzyme is better suited to situations where you have to match the state of React or some other function with state. Here, you can even use the setState function of React.

ref: https://www.testim.io/blog/react-testing-library-vs-enzyme/


### what is jest and why use it
Jest is a js testing framework. It ensures that different tests don't influence each other's results. For Jest, tests are executed in parallel, each running in their own process. This means they can't interfere with other tests, and Jest acts as the orchestrator that collects the results from all the test processes.