import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../Store';


// const Profile = props => {
  // const is_login = JSON.parse(localStorage.getItem("is_login"));
  // const email = localStorage.getItem("email");
  // const full_name = localStorage.getItem("full_name");
  // console.log("is_login", is_login);
class Profile extends Component {
  
  render() {

    if (!this.props.is_login) {
      return <Redirect to={{pathname: "/signin"}}/>;
    }
    else {
      return (
        <div>
        <br/>
        <div className="container justify-content-center">
        <section>
          <h1 style={{fontWeight:"bold"}}>PROFILE</h1>
          <p>
            <label>Email:</label> {this.props.email}
          </p>
          <p>
            <label>Full Name:</label> {this.props.full_name}
          </p>
        </section>
        </div>
        </div>
      )
    }
  };
}
  
export default connect("is_login, email, full_name",actions)(withRouter(Profile));