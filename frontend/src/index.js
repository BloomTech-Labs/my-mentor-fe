import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// import store from "./redux/store";


import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import mentorApp from './redux/reducer/reducer';
import thunkMiddleware from 'redux-thunk'
import axiosWithAuth from './middleware/axioswithauth';

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, axiosWithAuth)(createStore)

let store = createStoreWithMiddleware(mentorApp)

let rootElement = document.getElementById('root')

render(
  <Provider store={store}>
  <App />
</Provider>,
rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
