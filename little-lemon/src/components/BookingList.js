import React from 'react';
import ListItem from './BookingListItem';

const BookingList = ({ booking }) => {
  const bookingValues = Object.values(booking);
  const stringEmpty = (currentValue) => currentValue === '';
  if (!bookingValues.some(stringEmpty)) {
    return (
      <>
        <h1 className="text-center my-3 display-5">Your Reservation</h1>
        <ul className="list-group container ">
          {bookingValues.map(
            (item) => item !== '' && 
            <ListItem key={item}>{item}</ListItem>
          )}
        </ul>
      </>
    );
  }
  return;
};

export default BookingList;
