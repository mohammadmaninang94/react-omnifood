import React from 'react';

import CustomLink from '../custom-button/custom-button.component';

import './hero-text-box.styles.css';

const HeroTextBox = () => (
    <div className='hero-text-box'>
        <h1>Goodbye junk food.<br /> Hello super healthy meals.</h1>
        <CustomLink href='#' className='btn btn-full'>I’m hungry</CustomLink>
        <CustomLink href='#' className='btn btn-ghost'>Show me more</CustomLink>
    </div>
);

export default HeroTextBox;