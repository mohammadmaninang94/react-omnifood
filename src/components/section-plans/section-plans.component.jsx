import React from 'react';

import CustomLink from '../../components/custom-link/custom-link.component';

import plans from './plans';

import './section-plans.styles.css';

const SectionPlans = () => (
    <section className='section-plans'>
        <div className='row'>
            <h2>Start eating healthy today</h2>
        </div>
        <div className='row'>
            {plans.map(({ id, plan, pricePerMonth, pricePerMeal, features, buttonClass }) => (
                <div key={id} className={`col span-1-of-${plans.length}`}>
                    <div className='plan-box'>
                        <div>
                            <h3>{plan}</h3>
                            {pricePerMonth ?
                                <React.Fragment>
                                    <p className='plan-price'>{pricePerMonth} <span>/ month</span></p>
                                    <p className='plan-price-meal'>{pricePerMeal}</p>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <p className='plan-price'>{pricePerMeal} <span>/ meal</span></p>
                                    <p className='plan-price-meal'>&nbsp;</p>
                                </React.Fragment>
                            }
                        </div>
                        <div>
                            <ul>
                                {features.map((feature, index) => (
                                    <li key={`${plan}-${index}`}>
                                        <i className={`ion-ios-${feature ? 'checkmark' : 'close'}-empty icon-small`}></i>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <CustomLink href='#' className={buttonClass}>Sign up now</CustomLink>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default SectionPlans;

// Section 6: Sign up and pricing plans
// Title: Start eating healthy today

