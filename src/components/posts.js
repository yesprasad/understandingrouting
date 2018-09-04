import React from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
    const ids = [
        { id: 1,name: 'post 1' },
        { id: 2,name: 'post 2' },
        { id: 3,name: 'post 3' }
    ];

    return ids.map(item => {
        return(
            <span key={item.id}>
            <Link to={item.id}>{item.name}</Link><br/>
            </span>
        )
    })

    
}

export default Posts;