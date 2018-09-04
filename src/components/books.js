import React from 'react';
import { Link } from 'react-router-dom';


const Books = () => {
    return(
        <div>
            <p>Hey, find your books here</p>
            <Link to="/books/1">Book 1</Link><br/>
            <Link to="/books/2">Book 2</Link><br/>
            <Link to="/books/3">Book 3</Link><br/>
        </div>
    )
}

export default Books;