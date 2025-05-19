import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import RoomCard from '../components/RoomCard';

function SearchRooms() {
  const [rooms, setRooms] = useState([]);

  const handleSearch = (data) => {
    // Dummy data for demonstration; replace with API call in a real app
    const dummyRooms = [
      { id: 1, room_number: '101', type: 'Single', price_per_night: 100, description: 'A cozy single room.' },
      { id: 2, room_number: '102', type: 'Double', price_per_night: 150, description: 'A spacious double room.' },
    ];
    setRooms(dummyRooms);
  };

  return (
    <div className="container">
      <h1>Search Rooms</h1>
      <SearchForm onSearch={handleSearch} />
      <div className="row">
        {rooms.map(room => (
          <div className="col-md-4" key={room.id}>
            <RoomCard room={room} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchRooms;