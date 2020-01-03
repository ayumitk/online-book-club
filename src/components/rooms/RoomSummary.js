import React from "react";
import moment from "moment";

const RoomSummary = ({ room }) => (
  <div className="card z-depth-0">
    <div className="card-content grey-text text-darken-3">
      <span className="card-title ">{room.title}</span>
      <p>
        Posted by
        {room.authorName}
      </p>
      <p className="grey-text">{moment(room.createdAt.toDate()).fromNow()}</p>
    </div>
  </div>
);

export default RoomSummary;
