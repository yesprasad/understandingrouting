import React from 'react';
import { Link } from 'react-router-dom';


const Profile = (props) => {
    return(
        <div>
            <p>This is all what we know about you!</p>
            <Link to={{pathname: `${props.match.url}/Books`}}>
                Take me to Books from here
            </Link>
        </div>
    )
}

export default Profile;