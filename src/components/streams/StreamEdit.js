import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream, editStreams } from "../../actions";
import Streamform from "./StreamForm";

/*explanation on props video 264 265*/

class StreamEdit extends Component {
  componentDidMount() {
    /*explanation on why we use componentdidMount 267*/
    this.props.fetchStream(this.props.match.params.anything);
  }
  onFormSubmited = (formValues) => {
    this.props.editStreams(this.props.match.params.anything, formValues); //272
  };
  render() {
    if (!this.props.stream) {
      return <div>loading...</div>;
    }

    return (
      <div>
        <h3>Edit A Stream</h3>
        <Streamform
          initialValues={_.pick(this.props.stream, "title", "description")} //initial value explanation on 270 6:50
          onSubmit={this.onFormSubmited}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  /*explanation on ownProps video 265*/
  return { stream: state.streams[ownProps.match.params.anything] };
  /*ownProps is to acces the props in components*/
};
export default connect(mapStateToProps, { fetchStream, editStreams })(
  StreamEdit
);
