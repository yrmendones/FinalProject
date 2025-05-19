import React from 'react';
import { Link } from 'react-router-dom';

function RoomCard({ room }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{room.room_number}</h5>
        <p className="card-text">Type: {room.type}</p>
        <p className="card-text">Price: ${room.price_per_night} per night</p>
        <p className="card-text">{room.description}</p>
        <Link to={`/room/${room.id}`} className="btn btn-primary">View Details</Link>
      </div>
    </div>
  );
}

export default RoomCard;