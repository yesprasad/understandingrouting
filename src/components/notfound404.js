import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return(
        <div>
            <p>The page  you are looking for doesn't exist. Go back to Home</p>
            <Link to='/Home'>goto Home!</Link>
        </div>
    )
}

export default NotFound;