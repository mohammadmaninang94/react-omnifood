import React from 'react';

import CustomLink from '../custom-button/custom-button.component';

import steps from './steps';

import './section-steps.styles.css';

const SectionSteps = () => (
    <section className='section-steps'>
        <div className='row'>
            <h2>How it works &mdash; Simple as 1, 2, 3</h2>
        </div>
        <div className='row'>
            <div className='col span-1-of-2 steps-box'>
                <img src='/img/app-iPhone.png' alt='Omnifood app on iPhone' className='app-screen' />
            </div>
            <div className='col span-1-of-2 steps-box'>
                {steps.map(({ id, description }) => (
                    <div key={id} className='works-step'>
                        <div>{id}</div>
                        <p>{description}</p>
                    </div>
                ))}
                <CustomLink href='#' className='btn-app'>
                    <img src='/img/download-app.svg' alt='App store button' />
                </CustomLink>
                <CustomLink href='#' className='btn-app'>
                    <img src='/img/download-app-android.png' alt='Play store button' />
                </CustomLink>
            </div>
        </div>
    </section>
);

export default SectionSteps;
