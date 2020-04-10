import React, { Component } from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import Streamform from "./StreamForm";
class StreamCreate extends Component {
  onFormSubmited = (formValues) => {
    //Q5
    this.props.createStream(formValues);
  };
  render() {
    return (
      <div>
        <div>Create Stream</div>
        <Streamform onSubmit={this.onFormSubmited} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate); //why null beacause we dont need to acess any data only put the data that is entered
