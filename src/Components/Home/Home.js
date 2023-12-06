import React from 'react';
import AmazingArt from '../AmazingArt/AmazingArt';
import Create from '../Create/Create';
import Hero from '../Hero/Hero';
import Navigation from './Navigation';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <AmazingArt />
      <Create />
    </div>
  );
};

export default Home;
