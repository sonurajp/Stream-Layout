import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderAdmin(str) {
    if (str.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${str.id}`} className="ui button primary">
            Edit
          </Link>
          <Link to={`/streams/delete/${str.id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  }
  renderList() {
    return this.props.streamer.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/show/${stream.id}`}>{stream.title}</Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }
  renderCreate(str) {
    if (this.props.currentStatus) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui primary button">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    console.log(this.props.streamer);
    return (
      <div>
        {" "}
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        <div>{this.renderCreate()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    streamer: Object.values(state.streams),
    currentUserId: state.auth.userId,
    currentStatus: state.auth.status,
  }; //object.vlues Q11S
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);

//any doubt on how we fetch data from db.json ?
//well we created a api localhost 3001 which is the baseURL in the apis stream.js
