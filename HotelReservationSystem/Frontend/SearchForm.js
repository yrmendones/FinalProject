import React from 'react';
import { useForm } from 'react-hook-form';

function SearchForm({ onSearch }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitHandler = (data) => {
    onSearch(data);
  };

  return (
    <div>
      <div>
        <label>Check-in Date</label>
        <input type="date" {...register('checkInDate', { required: 'Check-in date is required' })} />
        {errors.checkInDate && <span>{errors.checkInDate.message}</span>}
      </div>
      <div>
        <label>Check-out Date</label>
        <input type="date" {...register('checkOutDate', { required: 'Check-out date is required' })} />
        {errors.checkOutDate && <span>{errors.checkOutDate.message}</span>}
      </div>
      <div>
        <label>Number of Guests</label>
        <input type="number" {...register('guests', { required: 'Guests is required', min: { value: 1, message: 'At least 1 guest' } })} />
        {errors.guests && <span>{errors.guests.message}</span>}
      </div>
      <button type="button" onClick={handleSubmit(submitHandler)}>Search</button>
    </div>
  );
}

export default SearchForm;