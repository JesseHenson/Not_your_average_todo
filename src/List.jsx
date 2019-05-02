import React, { Component } from "react";
import { connect } from "react-redux";
import {
  COMPLETE_ITEM,
  ADD_ITEM,
  SORT_TABLE,
  REVERSE_SORT_TABLE,
  FILTER_TABLE,
  COMPLETED_FILTER_TABLE
} from "./index";

const mapStateToProps = state => {
  return { todoList: state.todoList };
};

const mapDispatchToProps = dispatch => {
  return {
    completeItem: index => dispatch({ type: COMPLETE_ITEM, index }),
    addItem: item => dispatch({ type: ADD_ITEM, item }),
    sort: sorter => dispatch({ type: SORT_TABLE, sorter }),
    reverseSort: sorter => dispatch({ type: REVERSE_SORT_TABLE, sorter }),
    filterTable: value => dispatch({ type: FILTER_TABLE, value }),
    completeFilter: () => dispatch({ type: COMPLETED_FILTER_TABLE })
  };
};

class ConnectedList extends Component {
  render() {
    return (
      <div className="flex flex-column items-center br3">
        <input
          className="bg-primary mv3 br2 bn no-outline"
          onChange={event => this.props.filterTable(event.target.value)}
        />
        <div className="flex flex-row w-80 justify-between ph4 bg-dark-primary white">
          <div className="flex flex-row items-center">
            <p className="mh2" onClick={() => this.props.sort("title")}>
              Todo
            </p>
            <i
              onClick={() => this.props.sort("title")}
              className="fas fa-arrow-circle-down"
            />
            <i
              onClick={() => this.props.reverseSort("title")}
              className="fas fa-arrow-circle-up"
            />
          </div>
          <div className="flex flex-row items-center">
            <i
              onClick={() => this.props.sort("title")}
              className="fas fa-arrow-circle-down"
            />
            <i
              onClick={() => this.props.reverseSort("title")}
              className="fas fa-arrow-circle-up"
            />
            <p onClick={() => this.props.completeFilter()}>Completed</p>
          </div>
        </div>
        {this.props.todoList.map(todo =>
          !todo.hidden ? (
            <div
              key={todo.id}
              className="flex flex-row w-80 bg-primary white justify-between ph4"
            >
              <p className="mh2">{todo.title}</p>
              <p onClick={() => this.props.completeItem(todo.id)}>
                {todo.completed ? "Completed" : "Start Now"}
              </p>
            </div>
          ) : null
        )}
        <div>
          <button
            onClick={() =>
              this.props.addItem({
                id: 5,
                title: "this other",
                completed: false
              })
            }
            className="bg-dark-primary white f3 mv3 b--black br3 shadow-3 glow grow o-90"
          >
            Add Item
          </button>
        </div>
      </div>
    );
  }
}

// add filter functionality
// add sort functionality
// for both name and for completed properties

const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);

export default List;
