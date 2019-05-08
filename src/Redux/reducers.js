import {
    COMPLETED_FILTER_TABLE,
    COMPLETE_ITEM,
    ADD_ITEM,
    REVERSE_SORT_TABLE,
    SORT_TABLE,
    FILTER_TABLE
} from './constants'

const initialState = {
    todoList: [
      { id: 1, title: "alpha", completed: true, hidden: false },
      { id: 4, title: "delta", completed: false, hidden: false },
      { id: 2, title: "beta", completed: true, hidden: false },
      { id: 3, title: "carl", completed: false, hidden: false }
    ],
    isFiltered: false
  };

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
  

  export default todoReducer