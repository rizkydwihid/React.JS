import React, { Component } from "react";
import MainRoute from "./MainRoute";
import { withRouter } from "react-router-dom";
import Navigation from './componen/Navigation';


class AppAjax extends Component {
  
  postSignout = () => {
    localStorage.removeItem("is_login");
    this.props.history.push("/signin");
  };
  render() {
    return (
      <div>
        <Navigation postSignout={this.postSignout}/>
        <MainRoute />
      </div>
    );
  }
}

export default withRouter(AppAjax);
