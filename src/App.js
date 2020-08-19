import React from 'react';

import Header from '../src/components/header/header.component';
import SectionFeatures from './components/section-features/section-features.component';
import SectionMeals from './components/section-meals/section-meals.component';
import SectionSteps from './components/section-steps/section-steps.component';
import SectionCities from './components/section-cities/section-cities.component';

import './vendors/css/ionicons.min.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <SectionFeatures />
      <SectionMeals />
      <SectionSteps />
      <SectionCities />
    </React.Fragment>
  );
}

export default App;
