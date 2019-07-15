import React from 'react'
import {connect} from 'react-redux';



const Kanbaan = (props) => {
  console.log(props)
  return (
    <div>
      <div className="container mb-5">
      Not Completed
    {props.todos ? props.todos.map(todo=>
      <div class="card" style={{width: "18rem"}}>
        <div class="card-body">
          <h5 class="card-title">{todo.title}</h5>
          <p class="card-text">{todo.completed}</p>
          <a href="#" class="btn btn-primary">Details</a>
        </div>
      </div>
    
    ): props.loading ? <div>Loading</div> : null}
      </div>
      
    </div>
  )
}

export default Kanbaan
