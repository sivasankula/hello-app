import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/login.css'

function Navbar(props) {
    return (
        <div className='navbarStyle'>
            <div className='navbarLinkStyle' ><Link to = '' >Academy</Link></div>
            <div className='navbarLinkStyle' ><Link to = '' >Course</Link></div>
            <div className='navbarLinkStyle' ><Link to = '' >Students</Link></div>
        </div>
    );
}

export default Navbar;