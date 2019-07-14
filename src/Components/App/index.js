import React from 'react'
import Header from '../Header/index';
import Main from '../Main/index'
import {BrowserRouter as Router} from 'react-router-dom'

const App = () => (
    <Router>
        <div className="App bg-dark h-100">
            <Header />
            <Main/>
        </div>
    </Router>
);

export default App
