import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';

const RoomDetails = (props) => {
  // console.log(props.room);
  const { room } = props;
  if (room) {
    return (
      <div className="container section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ room.title }</span>
            <p>{ room.content }</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by
              {' '}
              { room.authorName }
            </div>
            <div>{moment(room.createdAt.toDate()).fromNow()}</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container section center">
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

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const { id } = ownProps.match.params;
  const { rooms } = state.firestore.data;
  const room = rooms ? rooms[id] : null;
  // console.log(room);
  return {
    room,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'rooms',
  }]),
)(RoomDetails);
