import React from 'react';

import CustomLink from '../custom-button/custom-button.component';

const Footer = () => (
    <footer>
        <div className='row'>
            <div className='col span-1-of-2'>
                <ul className='footer-nav'>
                    <li><CustomLink htref='#'>About us</CustomLink></li>
                    <li><CustomLink htref='#'>Blog</CustomLink></li>
                    <li><CustomLink htref='#'>Press</CustomLink></li>
                    <li><CustomLink htref='#'>ios App</CustomLink></li>
                    <li><CustomLink htref='#'>Android App</CustomLink></li>
                </ul>
            </div>
            <div className='col span-1-of-2'></div>
        </div>
    </footer>
);

export default Footer;