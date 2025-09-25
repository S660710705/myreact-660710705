import React from 'react';
import {Link} from 'react-router-dom';

import './style/HomePage.css';

const BooksPage = () =>{
    return(
        <div>
            <h1>Welcome to BooksPage</h1>
            <p>This will show various books in the bookstore application</p>
            <p>Explore our collection of books and find your next read!</p>
            <Link to= "/category/fiction">Go To Category</Link>
        </div>
    );
}
export default BooksPage;
