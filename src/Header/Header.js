import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-area'>
            <h2 className='header'>Welcome my country Website</h2>

            <div className='menu-area'>
                <a href="/home">Home</a>
                <a href="/countries">Countries</a>
                <a href="/about">About</a>
            </div>

        </div>
    );
};

export default Header;