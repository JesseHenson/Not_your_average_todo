import React from 'react'
import Header from '../Header/index';
import Main from '../Main/index'
import {BrowserRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchTodos } from '../../Redux/actions';

const mapDispatchToProps = dispatch => {
    return {
      fetchItems: ()=>dispatch(fetchTodos())
    }
}

const mapStateToProps = state => ({
    todos: state.request.json,
    loading: state.request.loading,
})

class App extends React.Component{
    componentDidMount() {
        this.props.fetchItems()
    }

    render() {
        return(
        
        <Router>
            <div className="App bg-dark min-vh-100 h-100">
                <Header />
                <Main todos={this.props.todos} loading={this.props.loading}/>
            </div>
        </Router>
        );
    }

} 

export default connect(mapStateToProps ,mapDispatchToProps)(App)
