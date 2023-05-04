import React from 'react';
import CallToAction from './CallToAction';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';

const Home = () => {
  return (
    <main className="">
      <CallToAction />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
};

export default Home;
