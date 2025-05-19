import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function RoomDetails() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    // Dummy data; replace with API call
    const dummyRoom = { id, room_number: '101', type: 'Single', price_per_night: 100, description: 'A cozy single room.' };
    setRoom(dummyRoom);
  }, [id]);

  if (!room) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{room.room_number}</h1>
      <p>Type: {room.type}</p>
      <p>Price: ${room.price_per_night} per night</p>
      <p>{room.description}</p>
      <Link to="/booking" className="btn btn-primary">Book Now</Link>
    </div>
  );
}

export default RoomDetails;