import {
    COMPLETED_FILTER_TABLE,
    COMPLETE_ITEM,
    ADD_ITEM,
    REVERSE_SORT_TABLE,
    SORT_TABLE,
    FILTER_TABLE
} from './constants'

import { REQUEST_TODOS, RECEIVE_TODOS } from './actions';
import { combineReducers } from 'redux';



const requestReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_TODOS:
      return { ...state, loading: true };
    case RECEIVE_TODOS:
      return { ...state, json: action.json, loading: false };
    case COMPLETE_ITEM:
      return {...state, json: [...state.json.map(el => el.id === action.index ? { ...el, completed: !el.completed } : { ...el })]};
    case ADD_ITEM:
      console.log(action.item)
      return {...state, json: state.json.concat(action.item)};
    case SORT_TABLE:
      return {...state, json: [...state.json.sort((a, b) => a[action.sorter] < b[action.sorter] ? -1 : 1)]};
    case REVERSE_SORT_TABLE:
      return {...state, json: [...state.json.sort((a, b) => a[action.sorter] > b[action.sorter] ? -1 : 1)]};
    case FILTER_TABLE:
      return {...state, json: [...state.json.map(el => el.title.includes(action.value) ? { ...el, hidden: false } : { ...el, hidden: true })]};
    case COMPLETED_FILTER_TABLE:
      return !state.isFiltered ? 
        {...state, json: [...state.json.map(el => el.completed ? { ...el, hidden: false } : { ...el, hidden: true })],
            isFiltered: !state.isFiltered}
        : {
            json: [...state.json.map(el => ({ ...el, hidden: false }))],
            isFiltered: !state.isFiltered
          };
    default:
        return state;
  }
};

const todoReducer = (state = {}, action) => {
    switch (action.type) {
      
      
      default:
        return state;
    }
  };
  

  const combinedReducer = combineReducers({todos: todoReducer, request: requestReducer})

  export default combinedReducer