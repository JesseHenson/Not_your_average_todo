import React from 'react'
import {Route} from 'react-router-dom';
import Home from './Home';
import Landing from './Landing'
import Todo from './Todo';
import Kanbaan from './Kanbaan';

const Main = (props) => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/Landing" component={Landing} />
      <Route path="/Todo" component={Todo} />
      <Route path="/Kanbaan" component={()=><Kanbaan todos={props.todos} loading={props.loading}/>} />
      
    </div>
  )
}

export default Main
