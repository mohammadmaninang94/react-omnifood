import React from 'react';

import testimonials from './testimonials';

import './section-testimonials.styles.css';

const SectionTestimonials = () => (
    <section className='section-testimonials'>
        <div className='row'>
            <h2>Our customers can't live without us</h2>
        </div>
        <div className='row'>
            {testimonials.map(({ name, image, quote }) => (
                <div key={name} className={`col span-1-of-${testimonials.length}`}>
                    <blockquote>
                        {quote}
                        <cite><img src={image} alt={name} />{name}</cite>
                    </blockquote>
                </div>
            ))}
        </div>
    </section>
);

export default SectionTestimonials;