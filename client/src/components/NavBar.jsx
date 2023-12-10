import React from 'react';
import { Link } from "react-router-dom";    

const NavBar = () => {
    return (
    <div className='d-flex justify-content-around align-items-center'>
        <h4>Books Corner</h4>
        <div className="d-flex justify-content-around">
            <Link to="/">Home</Link> &nbsp;|&nbsp;
            <Link to="/books/create">Create New Book</Link>
        </div>
    </div>
    )
}

export default NavBar