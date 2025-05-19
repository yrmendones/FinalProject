import React from 'react';
import BookingForm from '../components/BookingForm';

function Booking() {
  const handleBooking = (data) => {
    console.log('Booking confirmed:', data);
    // In a real app, send data to the backend API
  };

  return (
    <div className="container">
      <h1>Confirm Your Booking</h1>
      <BookingForm onSubmit={handleBooking} />
    </div>
  );
}

export default Booking;