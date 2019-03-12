import React, { Component } from 'react';
// import Header from './componen/Header';
import Footer from './componen/Footer';
import Gallery from './componen/About';
// import Navigatoin from './componen/Navigation';
import { Redirect } from 'react-router-dom';


// class AppAbout extends Component {
const AppAbout = props =>{
  const is_login = JSON.parse(localStorage.getItem("is_login"));

  if (is_login === null){
    return <Redirect to={{pathname: "/signin"}}/>;
  }
  else {
    return (
      <div className="App">
        
        <Gallery />
        <Footer />
      </div>
    );
  }
}



export default AppAbout;
