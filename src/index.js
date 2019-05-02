import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import "./styles.css";
import List from "./List";
import Header from "./Header";

const initialState = {
  todoList: [
    { id: 1, title: "alpha", completed: true, hidden: false },
    { id: 4, title: "delta", completed: false, hidden: false },
    { id: 2, title: "beta", completed: true, hidden: false },
    { id: 3, title: "carl", completed: false, hidden: false }
  ],
  isFiltered: false
};

export const COMPLETE_ITEM = "COMPLETE_ITEM";
export const ADD_ITEM = "ADD_ITEM";
export const SORT_TABLE = "SORT_TABLE";
export const REVERSE_SORT_TABLE = "REVERSE_SORT_TABLE";
export const FILTER_TABLE = "FILTER_TABLE";
export const COMPLETED_FILTER_TABLE = "COMPLETED_FILTER_TABLE";

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPLETE_ITEM:
      return {
        todoList: [
          ...state.todoList.map(el =>
            el.id === action.index
              ? { ...el, completed: !el.completed }
              : { ...el }
          )
        ]
      };
    case ADD_ITEM:
      return { todoList: [...state.todoList.concat(action.item)] };
    case SORT_TABLE:
      return {
        todoList: [
          ...state.todoList.sort((a, b) =>
            a[action.sorter] < b[action.sorter] ? -1 : 1
          )
        ]
      };
    case REVERSE_SORT_TABLE:
      return {
        todoList: [
          ...state.todoList.sort((a, b) =>
            a[action.sorter] > b[action.sorter] ? -1 : 1
          )
        ]
      };
    case FILTER_TABLE:
      return {
        todoList: [
          ...state.todoList.map(el =>
            el.title.includes(action.value)
              ? { ...el, hidden: false }
              : { ...el, hidden: true }
          )
        ]
      };
    case COMPLETED_FILTER_TABLE:
      return !state.isFiltered
        ? {
            todoList: [
              ...state.todoList.map(el =>
                el.completed
                  ? { ...el, hidden: false }
                  : { ...el, hidden: true }
              )
            ],
            isFiltered: !state.isFiltered
          }
        : {
            todoList: [...state.todoList.map(el => ({ ...el, hidden: false }))],
            isFiltered: !state.isFiltered
          };
    default:
      return state;
  }
};

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(todoReducer, storeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
    <div className="App bg-silver vh-100">
      <div>
        <Header />
        <List />
      </div>
    </div>
  );
}

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
