import React from 'react';
import {Link} from 'react-router-dom';

import './style/HomePage.css';

const Category = () =>{
    return(
        <div>
            <h1>Welcome to Category</h1>
            <p>This is the category of the bookstore application</p>
            <Link to= "/about">Go To About</Link>
        </div>
    );
}
export default Category;
