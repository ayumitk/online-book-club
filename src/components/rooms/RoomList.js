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
    <div className="section center">
      <div className="preloader-wrapper small active">
        <div className="spinner-layer spinner-red-only">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomList;
