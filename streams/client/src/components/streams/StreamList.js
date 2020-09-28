import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdminButtons(currentUserId, stream) {
    if (currentUserId === stream.userId) {
      return (
        <div>
          <button className="ui button primary">Edit</button>
          <button className="ui button negative">Delete</button>
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

  render() {
    return (
      <div>
        <h3>Streams</h3>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUserId: state.auth.userId,
    streams: Object.values(state.streams),
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
