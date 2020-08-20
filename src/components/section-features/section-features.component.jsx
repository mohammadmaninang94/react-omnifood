import React from 'react';

import features from './features';

import './section-features.styles.css';

const SectionFeatures = () => (
    <section className='section-feature'>
        <div className='row'>
            <h2>Get food fast &mdash; not fast food</h2>
            <p className='long-copy'>Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!</p>
        </div>
        <div className='row'>
            {features.map(({ id, title, description, icon }) => (
                <div key={id} className='col span-1-of-4 box'>
                    <i className={`${icon} icon-big`}></i>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default SectionFeatures;