import React from 'react';

import HeroTextBox from '../hero-text-box/hero-text-box.component';
import Navbar from '../navbar/navbar.component';

import './header.styles.css';

const Header = () => {
    return (
        <header>
            <Navbar />
            <HeroTextBox />
        </header>
    );
};

export default Header;