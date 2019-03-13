import React, { Component } from 'react';
// import Header from './componen/Header';
import Footer from './componen/Footer';
// import Gallery from './componen/About';
import About from './componen/About';
// import Navigatoin from './componen/Navigation';
import { Redirect } from 'react-router-dom';
import {connect} from 'unistore/react';
import {withRouter} from 'react-router-dom';
import {actions} from './Store';


// class AppAbout extends Component {
class AppAbout extends Component{
  // const is_login = JSON.parse(localStorage.getItem("is_login"));
render() {
  // if (this.props.is_login === null){
  //   console.log("test login", this.props.is_login)
  //   return <Redirect to={{pathname: "/signin"}}/>;
  // }
  // else {
    return (
      <div className="App">
        
        <About />
        <Footer />
      </div>
    );
  }
}




// export default AppAbout;
export default connect("is_login", actions)(withRouter(AppAbout));