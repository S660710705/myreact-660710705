import React from "react";
import { Link,  useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const handleHome = () =>{
        navigate("/");
    };
    
    return(
        <div>
            <h1>404 - Not Found</h1>
            <p> the page you are looking for does not exitst.</p>
        </div>
    );
};

export default NotFound;

