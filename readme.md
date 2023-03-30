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

### What is prop drilling?
Passing down props from a parent component to child component (and it's child component) is called as PROPS DRILLING


### What is lifting the state up?
Parent component controlling the state of it’s children component


### What is Context Provider and Context Consumer?
The provider is used to create a context that can be consumed. The consumer is used to consume the provided context.


### If you don’t pass a value to the provider does it take the default value?
Yes, if the provider has specified default values then it'll be used.


More react context stuff here

https://bitbucket.org/namastedev/namaste-react-live/commits/00811b2cc35c789e81ab205c1f8549bb52c0c291#chg-src/utils/UserContext.js