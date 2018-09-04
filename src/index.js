import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

//components
import Home from './components/home';
import Books from './components/books';
import Profile from './components/profile';
import BookItem from './components/BookItem';
import NotFound404 from './components/notfound404';
import Posts from './components/posts';

const App = () => {
    return(
        <BrowserRouter>
        <div>
        <header>
            <Link to="/Home">Home</Link><br/>
            <Link to="/Books">Books</Link><br/>
            <Link to="/Profile">Profile</Link><br/>
            <Link to='/posts'>Posts</Link>
        </header>
            <div>
                <Switch>
                    <Route path='/home'  component={Home}/>
                    <Route path='/profile'  component={Profile}/>
                    <Route path='/books/:Id'  component={BookItem}/>
                    <Route path='/books' component={Books}/>
                    <Route path='/posts' component={Posts}/>
                    <Route path='/' exact component={Home}/>
                    <Route component={NotFound404}/>
                </Switch>
            </div>
        </div>
        </BrowserRouter>

        
        
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));