import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

//components
import Home from './components/home';
import Books from './components/books';
import Profile from './components/profile';

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Route path='/' exact component={Home}/>
                <Route path='/books' component={Books}/>
                <Route path='/profile' component={Profile}/>
            </div>
        </BrowserRouter>
        
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));