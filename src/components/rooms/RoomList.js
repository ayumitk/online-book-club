import React from 'react';
import { Link } from 'react-router-dom';
import RoomSummary from './RoomSummary';

const RoomList = ({ rooms }) => {
  if (rooms) {
    return (
      <div className="section">
        { rooms && rooms.map((room) => (
          <Link to={`/room/${room.id}`} key={room.id}>
            <RoomSummary room={room} />
          </Link>
        ))}
      </div>
    );
  }
  return (
    <div className="section">
      loading...
    </div>
  );
};

export default RoomList;
