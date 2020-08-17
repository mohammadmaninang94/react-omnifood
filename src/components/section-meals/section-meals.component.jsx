import React from 'react';

import favoriteMeals from './favoriteMeals';

import MealsShowcase from './meals-showcase.component';

import './section-meals.styles.css';

const SectionMeals = () => {
    const mealShowCase1 = favoriteMeals.filter(f => f.id < 5);
    const mealShowCase2 = favoriteMeals.filter(f => f.id > 4);
    return (
        <section className='section-meals'>
            <MealsShowcase items={mealShowCase1} />
            <MealsShowcase items={mealShowCase2} />
        </section>
    )
};

export default SectionMeals;

