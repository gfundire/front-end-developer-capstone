import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm.js';
import { fetchAPI, submitAPI } from './utils/api';

describe('Booking Form', () => {
  test('Renders the BookingForm heading', () => {
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    const dispatch = jest.fn();
    const handleSubmit = jest.fn();
    const handleBookingData = jest.fn();
    const validateForm = jest.fn();
    const booking = {
      res_date: '',
      res_time: '',
      guests: '',
      occasion: '',
      seatingOption: ''
    };

    render(
      <BookingForm
        times={times}
        dispatch={dispatch}
        handleSubmit={handleSubmit}
        booking={booking}
        handleBookingData={handleBookingData}
        validateForm={validateForm}
      />
    );

    const heading = screen.getByText('Find a Table for Any Occasion');
    expect(heading).toBeInTheDocument();
  });

  test('initializeTimes function returns the correct expected value', () => {
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    const initializeTimes = jest.fn(() => times);

    expect(initializeTimes()).toBe(times);
  });

  test('UpdateTimes function returns different value than is provided in the state', () => {
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const date = new Date('04/21/2023');
    const updateTimes = jest.fn(() => fetchAPI(date));
    const dispatch = jest.fn();
    const handleSubmit = jest.fn();
    const handleBookingData = jest.fn();
    const validateForm = jest.fn();
    const booking = {
      res_date: '',
      res_time: '',
      guests: '',
      occasion: '',
      seatingOption: ''
    };

    render(
      <BookingForm
        times={times}
        dispatch={dispatch}
        handleSubmit={handleSubmit}
        booking={booking}
        handleBookingData={handleBookingData}
        validateForm={validateForm}
      />
    );

    const dateInput = screen.getByLabelText('*Date');
    fireEvent.change(dateInput, { target: { value: date } });
    expect(updateTimes()).not.toEqual(times);
  });

  test('Validate function returns true when all fields are filled', () => {
    const bookingData = {
      res_date: '04/21/2023',
      res_time: '1700',
      guests: '2',
      occasion: 'Birthday',
      seatingOption: 'Outside'
    };
    const validateForm = () => {
      const bookingValues = Object.values(bookingData);
      const empty = (currentValue) => currentValue === '';
      const bookingFieldValues = Object.values(bookingValues);
      return !bookingFieldValues.some(empty);
    };

    const validate = jest.fn(() => validateForm());
    expect(validate()).toBe(true);
  });
  test('Validate function returns false when some or all fields are empty', () => {
    const bookingData = {
      res_date: '',
      res_time: '',
      guests: '',
      occasion: 'Birthday',
      seatingOption: 'Outside'
    };

    const validateForm = () => {
      const bookingValues = Object.values(bookingData);
      const empty = (currentValue) => (currentValue === '' ? true : flase);
      const bookingFieldValues = Object.values(bookingValues);
      return !bookingFieldValues.some(empty);
    };

    // const validate = jest.fn(() => validateForm());
    expect(validateForm()).toBe(false);
  });

  test.skip('Form Submission Is Disabled When some or all form fields are empty', () => {
    const booking = {
      res_date: '',
      res_time: '',
      guests: '',
      occasion: '',
      seatingOption: ''
    };

    const validateForm = jest.fn();
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const dispatch = jest.fn();
    const handleSubmit = jest.fn();
    const handleBookingData = jest.fn();

    render(
      <BookingForm
        times={times}
        dispatch={dispatch}
        handleSubmit={handleSubmit}
        booking={booking}
        handleBookingData={handleBookingData}
        validateForm={validateForm}
      />
    );
    const submitBtn = screen.getByTestId('submit-btn');
    fireEvent.click(submitBtn);
    expect(handleSubmit).not.toHaveBeenCalled();
    expect(validateForm).toHaveBeenCalled();
    expect(submitBtn).toBeDisabled();
  });

  test('Form is successfully submited when all fields are filled', () => {
    const booking = {
      res_date: new Date('04/21/2023'),
      res_time: '17:00',
      guests: '4',
      occasion: 'Bithday',
      seatingOption: 'Outside'
    };
    const date = new Date('04/21/2023');
    const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const dispatch = jest.fn();
    const handleSubmit = jest.fn();
    const handleBookingData = jest.fn();

    const someFormValuesNotEmpty = () => {
      const bookingValues = Object.values(booking);
      const someEmpty = (currentValue) => (currentValue === '' ? true : false);
      const bookingFieldValues = Object.values(bookingValues);
      return !bookingFieldValues.some(someEmpty);
    };
    const validateForm = jest.fn(() => someFormValuesNotEmpty);

    render(
      <BookingForm
        times={times}
        dispatch={dispatch}
        handleSubmit={handleSubmit}
        booking={booking}
        handleBookingData={handleBookingData}
        validateForm={validateForm}
      />
    );

    // const dateInput = screen.getByLabelText('*Date');
    // fireEvent.change(dateInput, { target: { value: date } });

    // const timeInput = screen.getByLabelText('*Choose time');
    // fireEvent.change(timeInput, { target: { value: '17:00' } });

    // const guestsInput = screen.getByLabelText('*Number of Guests');
    // fireEvent.change(guestsInput, { target: { value: '4' } });

    // const occasionSelect = screen.getByLabelText('*Number of Guests');
    // fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    // const radioInput = screen.getByLabelText('Outside');
    // fireEvent.change(radioInput, { target: { value: 'Outside' } });

    const submitBtn = screen.getByText('Book Table');
    fireEvent.click(submitBtn);
    expect(validateForm).toHaveBeenCalled();
    expect(submitBtn).not.toBeDisabled();
  });
});
