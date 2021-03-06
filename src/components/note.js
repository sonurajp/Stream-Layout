import React, { Component } from "react";
import { connect } from "react-redux";
import { SignIn, SignOut } from "../actions";
class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1080141760757-nu3msah7cdf28en00sv27c3u5qlrlc7h.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onSignIn = () => {
    this.auth.signIn();
  };
  onSingOut = () => {
    this.auth.signOut();
  };

  onAuthChange = Signed => {
    if (Signed) {
      this.props.SignIn();
    } else {
      this.props.SignOut();
    }
  };
  renderAuthButton() {
    if (this.props.Signed === null) {
      return null;
    } else if (this.props.Signed) {
      return (
        <div>
          <button onClick={this.onSingOut} className="ui green red button">
            <i className="google icon" />
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.onSignIn} className="ui green green button">
            <i className="google icon" />
            Sign In
          </button>
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
const mapStateToProps = state => {
  return { Signed: state.auth.status };
};
export default connect(mapStateToProps, { SignIn, SignOut })(GoogleAuth);
