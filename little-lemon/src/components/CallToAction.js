import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import './call-to-action.css';

const CallToAction = () => {
  const navigate = useNavigate();
  const handleClik = () => navigate('reservations/bookings');
  return (
    <section className="p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 hero-text mb-3">
            <h1 className="color-primary display-title">Little Lemon</h1>
            <h2 className="text-white">Chicago</h2>
            <p className="text-white lead-text py-5">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Button onClick={handleClik}>Reserve a Table</Button>
          </div>
          <div className="col-md-6 mb-3">
            <img
              className="hero w-100"
              src="https://images2.imgbox.com/81/3e/scEJEW4D_o.png"
              alt="little lemon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
