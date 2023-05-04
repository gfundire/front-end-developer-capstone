import React from 'react';
import Button from './Button';
import dishes from '../utils/dishes';
import Card from './Card';
import './specials.css';

const Specials = () => {
  return (
    <section className="specials p-5 w-100">
      <div className="container">
      <div className="row my-3">
        <div className="col">
          <h2 className="section-title">This week's Specials</h2>
        </div>
        <div className="col">
          <Button className="float-end">Online Menu</Button>
        </div>
      </div>
      <div className="card-area">
        {dishes.map((d) => (
          <Card
            key={d.name}
            title={d.name}
            text={d.description}
            src={d.src}
            price={d.price}
          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Specials;
