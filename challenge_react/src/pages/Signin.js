import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Signin extends Component {
  state = { username: "", password: "" };
  changeInput = e => {
    this.setState({[e.target.name]: e.target.value});
  };
  postLogin = () => {
    const {username, password} = this.state;
    const data = {
      username:username,
      password:password
    };
    const self = this;
    axios
    .post("https://atareact.free.beceptor.com/auth", data)
    .then(function(response){
      console.log(response.data);
      if (response.data.hasOwnProperty("api_key")) {
        localStorage.setItem("api_key", response.data.api_key);
        localStorage.setItem("is_login", true);
        localStorage.setItem("full_name", response.data.full_name);
        localStorage.setItem("email", response.data.email);
        self.props.history.push("/profil")
      }
    })
    .catch(function(error){
      console.log(error);
    });
  }
  render(){
    console.log("state", this.state);
    return(
      <section className="content signin">
        <form onSubmit={e => e.preventDefault()}>
          <h4> Sign In</h4>
          <div>
            <label for="email"><i class="fa fa-envelope" aria-hidden="true"></i> <b>Email:</b></label>
            <input type="text" name="username" placeholder="Username" onChange={e => this.changeInput(e)}/>
          </div>
          <div>
            <label for="psw"><i class="fa fa-lock" aria-hidden="true"></i> <b>Password</b></label>
            <input type="password" name="password" placeholder="Password" onChange={e => this.changeInput(e)}/>
          </div>
          <button onClick={() => this.postLogin()}>SignIn</button>
          <button type="reset">Reset</button>
        </form>
      </section>
    );
  }
}
  
export default withRouter(Signin);