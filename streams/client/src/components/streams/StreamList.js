import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdminButtons(currentUserId, stream) {
    if (currentUserId === stream.userId) {
      return (
        <div>
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link to="/" className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div key={stream.id} className="item">
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            <div className="right floated content">
              {this.renderAdminButtons(this.props.currentUserId, stream)}
            </div>
            <div className="header">{stream.title}</div>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreateStreamButton() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link className="ui button primary" to="/streams/new">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h3>Streams</h3>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreateStreamButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    currentUserId: state.auth.userId,
    streams: Object.values(state.streams),
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
