import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingListItem = ({ children }) => {
  const navigate = useNavigate();
  const goBack = (e) => {
    e.preventDefault();
    navigate('/reservations/bookings');
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="fw-bold ms-2 me-auto">{children}</div>
      <button className="btn btn-primary btn-sm" type="submit" onClick={goBack}>
        Edit
      </button>
    </li>
  );
};

export default BookingListItem;
