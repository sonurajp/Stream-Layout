import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label> {/* Q4 */}
        <input {...input} /> {/* Q3 */}
        {this.renderError(meta)} {/* Q6 */}
      </div>
    );
  };
  onFormSubmit = (formValues) => {
    //Q5
    this.props.onSubmit(formValues);
  };
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onFormSubmit)} //  {Q5}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Name" />{" "}
        {/* label explanation Q4 */}
        <Field
          name="description"
          component={this.renderInput}
          label="Description"
        />
        <button className="ui button primary">Submit</button>
        {/* any doubt on we navigated to http://localhost:3000/ when we press the sumit button Q12 */}
      </form>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You Must Enter A Title"; //Q7
  }
  if (!formValues.description) {
    errors.description = "You Must Enter A Description";
  }
  return errors;
};
export default reduxForm({ form: "streamform", validate })(StreamForm);
