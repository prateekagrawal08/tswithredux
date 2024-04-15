# JavaScript Promise all() Method


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

The Promise.all() method is actually a method of the Promise object (which is also an object under JavaScript used to handle all the asynchronous operations), that takes an array of promises(an iterable) as input. It returns a single Promise that resolves when all of the promises passed as an iterable, which have resolved, or when the iterable contains no promises. In a simple way, if any of the passed-in promises reject, the Promise.all() method asynchronously rejects the value of the promise that has already been rejected, whether or not the other promises have been resolved. 

#Syntax: 

Promise.all( iterable )
Parameters: This method accepts a single parameter iterable which takes an array of promises or a normal array that contains some objects.

Return values: It follows some rules to return a single promise: 

https://github.com/prateekagrawal08/tswithredux/blob/main/src/api/examples-promise.js

