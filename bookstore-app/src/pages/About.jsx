import React from 'react';
import {Link} from 'react-router-dom';

import './style/HomePage.css';

const About = () =>{
    return(
        <div>
            <h1>About</h1>
            <p>you can find abou us here!</p>
            <Link to= "/contact">Go To Contact</Link>
        </div>
    );
}
export default About;
