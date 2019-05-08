import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {store} from './Redux/store'


import "./styles.css";
import App from "./Components/App/index";






const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

// console.log(todoList.sort((a,b)=>(a.item>b.item) ? 1 : -1))

// console.log(todoList.filter(el=> el.item.includes('al')))

// console.log(todoList.filter(el=> el.completed))

//console.log(todoList.sort((a,b)=>a.completed>b.completed ? 1 : -1))
