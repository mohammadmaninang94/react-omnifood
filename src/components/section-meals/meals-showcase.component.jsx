import React from 'react';

import './meals-showcase.styles.css';

const MealsShowcase = ({ items }) => (
    <ul className='meals-showcase' >
        {items.map(({ id, name, imgSrc }) => (
            <li key={id}>
                <figure className='meal-photo'>
                    <img src={imgSrc} alt={name} />
                </figure>
            </li>
        ))}
    </ul>
);

export default MealsShowcase;