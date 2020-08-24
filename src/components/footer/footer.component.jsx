import React from 'react';

import CustomLink from '../custom-button/custom-button.component';

import './footer.styles.css';

const Footer = () => (
    <footer>
        <div className='row'>
            <div className='col span-1-of-2'>
                <ul className='footer-nav'>
                    <li><CustomLink htref='#'>About us</CustomLink></li>
                    <li><CustomLink htref='#'>Blog</CustomLink></li>
                    <li><CustomLink htref='#'>Press</CustomLink></li>
                    <li><CustomLink htref='#'>iOS App</CustomLink></li>
                    <li><CustomLink htref='#'>Android App</CustomLink></li>
                </ul>
            </div>
            <div className='col span-1-of-2'>
                <ul className='social-links'>
                    <li><CustomLink href='#'><i className='ion-social-facebook'></i></CustomLink></li>
                    <li><CustomLink href='#'><i className='ion-social-twitter'></i></CustomLink></li>
                    <li><CustomLink href='#'><i className='ion-social-googleplus'></i></CustomLink></li>
                    <li><CustomLink href='#'><i className='ion-social-instagram'></i></CustomLink></li>
                </ul>
            </div>
        </div>
        <div className='row'>
            <p>Copyright &copy; {new Date().getFullYear()} by Omnifood. All rigths reserved.</p>
        </div>
    </footer>
);

export default Footer;