import React from 'react';

const ProfileBooks = (props) => {
    return(
        <div>
           <h3>Hey, {props.match.params.Id}</h3>
        </div>
    )
}

export default ProfileBooks;