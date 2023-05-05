import './App.css';

import { useState, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import BookingForm from './components/BookingForm';
import DetailsForm from './components/DetailsForm';
import ConfirmedBooking from './components/ConfirmedBooking';
import Orders from './components/Orders';
import Error404 from './components/Error404';
import Login from './components/Login';
import Footer from './components/Footer';

import useBooking from './hooks/useBookings';
import { fetchAPI, submitAPI } from './utils/api';

export default function App() {
  const navigate = useNavigate();
  const { formik } = useBooking();

  const initialFormValues = {
    res_date: '',
    res_time: '',
    guests: '',
    occasion: '',
    seatingOption: '',
  };

  const [bookingData, setBookingData] = useState(initialFormValues);

  const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  const updateTimes = (state, action) => {
    if (action.type === 'change_date') {
      const date = new Date(action.date);
      return fetchAPI(date);
    }
    return state;
  };
  const initializeTimes = (times) => times;
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initialTimes,
    initializeTimes
  );

  const handleDateChange = (e) => {
    dispatch({ type: 'change_date', date: e.target.value });
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleBookingData = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const bookingValues = Object.values(bookingData);
    const empty = (currentValue) => currentValue === '';
    const bookingFieldValues = Object.values(bookingValues);
    return !bookingFieldValues.some(empty);
  };

  const isFormValid = validateForm();

  const submitForm = (formData) => {
    const result = submitAPI(formData);
    if (isFormValid && result) {
      setBookingData({ ...initialFormValues });
      navigate('/reservations/confirmation');
    }
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(bookingData);
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/reservations">
          <Route
            path="bookings"
            element={
              <BookingForm
                times={availableTimes}
                dispatch={handleDateChange}
                handleSubmit={handleSubmit}
                booking={bookingData}
                handleBookingData={handleBookingData}
                validateForm={validateForm}
                // formik={formik}
              />
            }
          />
          <Route
            path="details"
            element={
              <DetailsForm
                booking={bookingData}
                onSubmit={() => submitForm(bookingData)}
                setData={setBookingData}
                formik={formik}
              />
            }
          />
          <Route
            path="/reservations/confirmation"
            element={<ConfirmedBooking />}
          />
        </Route>
        <Route path="/order-online" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}