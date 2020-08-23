import React from 'react';

import CustomLink from '../custom-button/custom-button.component';
import HeroTextBox from '../hero-text-box/hero-text-box.component';

import './header.styles.css';

const Header = () => {
    return (
        <header>
            <nav>
                <div className='row'>
                    <img src='/img/logo-white.png'
                        alt='Omnifood Logo' className='logo' />
                    <ul className='main-nav'>
                        <li><CustomLink href='#'>Food delivery</CustomLink></li>
                        <li><CustomLink href='#'>How it works</CustomLink></li>
                        <li><CustomLink href='#'>Our cities</CustomLink></li>
                        <li><CustomLink href='#'>Sign up</CustomLink></li>
                    </ul>
                </div>
            </nav>
            <HeroTextBox />
        </header>
    );
};

export default Header;