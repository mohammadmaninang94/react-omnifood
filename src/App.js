import React from 'react';

import Header from '../src/components/header/header.component';
import Features from './components/features/features.component';
import SectionMeals from './components/section-meals/section-meals.component';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Features />
      <SectionMeals />
    </React.Fragment>
  );
}

export default App;
