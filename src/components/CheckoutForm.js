import React, { useState } from "react";
import { useForm } from '../hooks/useForm';

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, errors, handleChanges, handleErrors] = useForm(initialValue);


  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
    const submitErrors = {};
        Object.keys(errors).forEach(field => {
          submitErrors[field] = handleErrors(field, values[field])
        })
        handleErrors(submitErrors);
        const hasErrors = (
          submitErrors.firstName === '' && 
          submitErrors.lastName === '' && 
          submitErrors.address === '' &&
          submitErrors.city === '' &&
          submitErrors.state === '' &&
          submitErrors.zip === '' 
          );
          setShowSuccessMessage(hasErrors)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
          />
        </label>
        {(errors.firstName) && <p>Error: {errors.firstName}</p>}
        <label>
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
          />
        </label>
        {(errors.lastName) && <p>Error: {errors.lastName}</p>}
        <label>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={handleChanges}
          />
        </label>
        {(errors.address) && <p>Error: {errors.address}</p>}
        <label>
          City:
          <input name="city" value={values.city} onChange={handleChanges} />
        </label>
        {(errors.city) && <p>Error: {errors.city}</p>}
        <label>
          State:
          <input name="state" value={values.state} onChange={handleChanges} />
        </label>
        {(errors.state) && <p>Error: {errors.state}</p>}
        <label>
          Zip:
          <input name="zip" value={values.zip} onChange={handleChanges} />
        </label>
        {(errors.zip) && <p>Error: {errors.zip}</p>}
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
