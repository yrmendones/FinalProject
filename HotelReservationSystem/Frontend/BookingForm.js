import React from 'react';
import { useForm } from 'react-hook-form';

function BookingForm({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <div>
      <div>
        <label>Name</label>
        <input type="text" {...register('name', { required: 'Name is required' })} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <button type="button" onClick={handleSubmit(submitHandler)}>Confirm Booking</button>
    </div>
  );
}

export default BookingForm;