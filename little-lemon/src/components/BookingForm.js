import React from 'react';
import Button from './Button';
import './booking-form.css';
import Corousel from './Corousel';
// import Error from './FormError';

const BookingForm = ({
  times,
  dispatch,
  handleSubmit,
  booking,
  handleBookingData,
  validateForm,
  // formik,
}) => {
  // const { errors, values, touched, getFieldProps } = formik;

  const formValid = validateForm();
  return (
    <>
      <section>
        <Corousel />
      </section>
      <section>
        <div className="wrapper">
          <h1 className="text-center section-title my-5">
            Find a Table for Any Occasion
          </h1>
          <form className="row g-3 mb-5 px-5 w-100" onSubmit={handleSubmit}>
            <div className="col-12 col-md-6">
              <label htmlFor="res_date" className="form-label">
                *Date
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="Date"
                aria-label="Date"
                id="res_date"
                name="res_date"
                value={booking.res_date}
                onChange={dispatch}
                // {...getFieldProps('res_date')}
                required
              />
              {/* {errors.res_date && touched.res_date && (
              <Error>{errors.res_date}</Error>
            )} */}
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="res_time" className="form-label">
                *Choose time
              </label>
              <select
                id="res_time"
                name="res_time"
                className="form-select"
                value={booking.res_time}
                onChange={handleBookingData}
                // {...getFieldProps('res_time')}
                required
              >
                {times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {/* {errors.res_time && touched.res_time && (
              <Error>{errors.res_time}</Error>
            )} */}
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="guests" className="form-label">
                *Number of Guests
              </label>
              <input
                type="number"
                className="form-control"
                aria-label="Number of Guests"
                placeholder="1"
                id="guests"
                name="guests"
                min="1"
                max="10"
                required
                value={booking.guests}
                onChange={handleBookingData}
                // {...getFieldProps('guests')}
              />
              {/* {errors.guests && touched.guests && <Error>{errors.guests}</Error>} */}
            </div>

            <div className="col-12 col-md-6">
              <label htmlFor="occasion" className="form-label">
                *Occasion
              </label>
              <select
                id="occasion"
                name="occasion"
                value={booking.occasion}
                required
                className="form-select"
                onChange={handleBookingData}
                // {...getFieldProps('occasion')}
              >
                {['', 'Birthday', 'Engagement', 'Anniversary'].map((event) => (
                  <option key={event} value={event}>
                    {event}
                  </option>
                ))}
              </select>
              {/* {errors.occasion && touched.occasion && (
              <Error>{errors.occasion}</Error>
            )} */}
            </div>
            <div className="col-12">
              <h5>Seating Options</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="seatingOption"
                  id="standard"
                  // {...getFieldProps('seatingOption')}
                  value="Standard"
                  checked={booking.seatingOption === 'Standard'}
                  // checked={values.seatingOption === 'Standard'}
                  onChange={handleBookingData}
                  required
                />
                <label className="form-check-label" htmlFor="standard">
                  Standard
                </label>
                {/* {errors.seatingOption && touched.seatingOption && (
                <Error>{errors.seatingOption}</Error>
              )} */}
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="seatingOption"
                  id="outside"
                  // {...getFieldProps('seatingOption')}
                  value="Outside"
                  // checked={values.seatingOption === 'Outside'}
                  checked={booking.seatingOption === 'Outside'}
                  onChange={handleBookingData}
                  required
                />
                <label className="form-check-label" htmlFor="outside">
                  Outside
                </label>
                {/* {errors.seatingOption && touched.seatingOption && (
                <Error>{errors.seatingOption}</Error>
              )} */}
              </div>
            </div>
            <button
              aria-label="On Click"
              type="submit"
              className="btn btn-primary btn-lg btn-block"
              disabled={!formValid}
            >
              Book Table
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default BookingForm;
