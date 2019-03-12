import React, { Component } from 'react';
import Header from './componen/Header';
import Footer from './componen/Footer';
import Gallery from './componen/Gallery';


class AppGallery extends Component {
  render() {
    return (
      <div className="App">
        
        <Gallery />
        <Footer />
      </div>
    );
  }
}



export default AppGallery;
