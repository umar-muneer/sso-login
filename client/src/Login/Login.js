import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "./styles.css";

const ActionButton = withStyles({
  root: {
    width: "200px",
    marginTop: "5px"
  }
})(Button);
class Login extends React.Component {
  onLoginClick = () => {
    console.log(this.props, "###");
    this.props.history.push({ pathname: "/home" });
  };
  render() {
    return (
      <div className="container">
        <div className="button-container">
          <ActionButton
            variant="contained"
            color="primary"
            onClick={this.onLoginClick}
          >
            Login
          </ActionButton>
          <ActionButton variant="contained" color="secondary">
            Sign up
          </ActionButton>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
