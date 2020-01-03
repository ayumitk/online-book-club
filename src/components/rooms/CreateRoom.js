import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createRoom } from '../../store/actions/roomActions';

class CreateRoom extends Component {
  state = {
    title: '',
    content: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createRoom(this.state);
    this.props.history.push('/');
  }

  render() {
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Room</h5>
          <div className="input-field">
            <input type="text" id="title" onChange={this.handleChange} />
            <label htmlFor="title">Room Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange} />
            <label htmlFor="content">Room Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1" type="submit">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
});

const mapDispatchToProps = (dispatch) => ({
  createRoom: (room) => dispatch(createRoom(room)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoom);
