import React from 'react';
import Corousel from './Corousel';
import './confirmation.css';

const ConfirmedBooking = () => {
  return (
    <>
      <Corousel />
      <section className="container success pt-5">
        <div className="mt-5 text-center text-white" aria-hidden="true">
          <i className="bi bi-check-circle"></i>
        </div>
        <h1 className="my-3 section-title text-center text-white">Success!</h1>
        <p className="lead-text text-white">
          Your Table Reservation was successful, your invoice was sent to your
          email.
        </p>
        <p className="lead-text text-white">Thank you for choosing us.</p>
      </section>
    </>
  );
};

export default ConfirmedBooking;
