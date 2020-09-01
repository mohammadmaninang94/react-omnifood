import React, { useEffect } from 'react';

import CustomLink from '../custom-button/custom-button.component';

import './navbar.styles.css';

const Navbar = () => {
    const [scrolled, setScrolled] = React.useState(false);
    // const [offset, setScrolled] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 120) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={scrolled ? 'sticky' : ''}>
            <div className='row'>
                {scrolled ?
                    <img src='/img/logo.png' alt='Omnifood Logo' className='logo-black' />
                    :
                    <img src='/img/logo-white.png' alt='Omnifood Logo' className='logo' />
                }
                <ul className='main-nav'>
                    <li><CustomLink href='#'>Food delivery</CustomLink></li>
                    <li><CustomLink href='#'>How it works</CustomLink></li>
                    <li><CustomLink href='#'>Our cities</CustomLink></li>
                    <li><CustomLink href='#'>Sign up</CustomLink></li>
                </ul>
            </div>
        </nav >
    )
};

export default Navbar;