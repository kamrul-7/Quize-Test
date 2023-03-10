import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div className='d-flex justify-content-between bg-white shadow-lg p-4 text-danger font-bold  '>
            <h5 className=' text-2xl'>Sporcle – A World of Quizzes</h5>
            <nav className='nav'>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blogs'>Blogs</Link>
            </nav>
        </div>
    );
};

export default Nav;