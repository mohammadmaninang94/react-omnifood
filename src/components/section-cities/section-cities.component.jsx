import React from 'react';

import CustomLink from '../../components/custom-link/custom-link.component';

import cities from './cities';

import './section-cities.styles.css';

const SectionCities = () => (
    <section className='section-cities'>
        <div className='row'>
            <h2>We're currently in these cities</h2>
        </div>
        <div className='row'>
            {cities.map(({ city, image, features: { subscribers, chefs, twitter } }) => (
                <div key={city} className={`col span-1-of-${cities.length} box`}>
                    <img src={image} alt={city} />
                    <h3>{city}</h3>
                    <div className='city-feature'>
                        <i className='ion-ios-person icon-small'></i>
                        <span>{subscribers}</span>
                    </div>
                    <div className='city-feature'>
                        <i className='ion-ios-star icon-small'></i>
                        <span>{chefs}</span>
                    </div>
                    <div className='city-feature'>
                        <i className='ion-social-twitter icon-small'></i>
                        <CustomLink href='#'>{twitter}</CustomLink>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default SectionCities;

// Section 4: Cities
// Title: We're currently in these cities


