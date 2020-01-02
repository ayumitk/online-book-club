import React from 'react';

const RoomSummary = ({ room }) => (
  <div className="card z-depth-0">
    <div className="card-content grey-text text-darken-3">
      <span className="card-title ">{room.title}</span>
      <p>Posted by The Net Ninja</p>
      <p className="grey-text">3rd September, 2am</p>
    </div>
  </div>
);

export default RoomSummary;
