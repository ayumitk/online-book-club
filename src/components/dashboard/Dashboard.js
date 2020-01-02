import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Notifications from './Notifications';
import RoomList from '../rooms/RoomList';

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { rooms } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <RoomList rooms={rooms} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rooms: state.firestore.ordered.rooms,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'rooms' },
  ]),
)(Dashboard);
