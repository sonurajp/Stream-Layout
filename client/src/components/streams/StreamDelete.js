import _ from "lodash";
import React, { Component } from "react";
import Modal from "../Modal";
import { Link } from "react-router-dom";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStreams } from "../../actions";

class SreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderDelete() {
    const id = this.props.match.params.id;
    return (
      <React.Fragment>
        {/*279*/}

        <button
          onClick={() => this.props.deleteStreams(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button ">
          Cancel
        </Link>
      </React.Fragment>
    );
  }
  renderTitle() {
    if (!this.props.stream) {
      return <div>Are You sure?</div>;
    }
    return (
      <div>
        Are you sure you want to delete:<h2>{this.props.stream.title} </h2>{" "}
      </div>
    );
  }
  render() {
    return (
      <div>
        <Modal
          title="Delete Stream"
          content={this.renderTitle()}
          button={this.renderDelete()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}
const mapsStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapsStateToProps, { fetchStream, deleteStreams })(
  SreamDelete
);
