import React from 'react';
import Button from './Button';
import BookingList from './BookingList';
import Corousel from './Corousel';
import Error from './FormError';

const DetailsForm = ({ onSubmit, formik, booking }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const { errors, touched, getFieldProps } = formik;
  return (
    <>
      <Corousel />
      <section>
        <BookingList booking={booking} />
      </section>

      <form className="row g-3 mb-5 px-5" onSubmit={handleSubmit}>
        <div>
          <h2 className="text-center my-2 display-5">Personal Details</h2>
        </div>
        <div className="col-6">
          <label htmlFor="firstName" className="form-label">
            *First Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            aria-label="First name"
            id="firstName"
            name="firstName"
            {...getFieldProps('firstName')}
          />
          {errors.firstName && touched.firstName && (
            <Error>{errors.firstName}</Error>
          )}
        </div>
        <div className="col-6">
          <label htmlFor="lastName" className="form-label">
            *Last Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            aria-label="Last name"
            id="lastName"
            name="lastName"
            {...getFieldProps('lastName')}
          />
          {errors.lastName && touched.lastName && (
            <Error>{errors.lastName}</Error>
          )}
        </div>
        <div className="col-6">
          <label htmlFor="phoneNumber" className="form-label">
            *Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            placeholder="+263..."
            aria-label="Phone Number"
            id="phoneNumber"
            name="phoneNumber"
            // pattern="[+]{1}[0-9]{11,14}"
            {...getFieldProps('phoneNumber')}
          />
          {errors.phoneNumber && touched.phoneNumber && (
            <Error>{errors.phoneNumber}</Error>
          )}
        </div>
        <div className="col-6">
          <label htmlFor="email" className="form-label">
            *Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            aria-label="Email"
            id="email"
            name="email"
            {...getFieldProps('email')}
          />
          {errors.email && touched.email && <Error>{errors.email}</Error>}
        </div>

        <div className="col-12 mt-4">
          <label htmlFor="request" className="form-label">
            Special Request (Optional)
          </label>
          <textarea
            className="form-control"
            placeholder="Add a Special Request(Optional)"
            aria-label="request"
            id="request"
            name="request"
            {...getFieldProps('request')}
            rows="5"
          ></textarea>
        </div>
        <div className="co1-12">
          <Button type="submit" className="btn-lg btn-block col-12">
            Confirm Reservation
          </Button>
        </div>
      </form>
    </>
  );
};

export default DetailsForm;
