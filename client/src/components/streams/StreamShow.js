import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import flv from "flv.js";

class StreamShow extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    this.buildPlayer(); //294,95,96...
  }
  componentDidUpdate() {
    this.buildPlayer(); //294,95,96...
  }
  componentWillUnmount() {
    this.player.destroy(); //297
  }
  buildPlayer() {
    //294,95,96...
    if (this.player || !this.props.stream) {
      return;
    }
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${this.props.match.params.id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls />
        <h3>{this.props.stream.title}</h3>
        <div>{this.props.stream.description}</div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
