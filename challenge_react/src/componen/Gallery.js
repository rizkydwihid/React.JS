import React, { Component } from 'react';
// import img from './assets/logo/logo-alterra-academy.png';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

class Gallery extends Component {
    render() {
      return (
        <div>
        <div className="container col-10">
            <a className="navbar-brand marginlogo" href="#"><img src={require('../assets/ico/ico-gallery.png')}/></a>
            <span id="galery">GALLERY</span><hr/>
        </div>
        <div className="container">    
            <div className="row">    
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={require('../assets/img/exp-gallery/jake-allison-1322894-unsplash.jpg')} className="image1"/></div>
                <div className="col-lg-4 col-md-6 col-sm-12">         
                    <img src={require('../assets/img/exp-gallery/jay-lee-1323073-unsplash.jpg')} className="image1"/></div>
                <div className="col-lg-4 col-md-6 col-sm-12">            
                    <img src={require('../assets/img/exp-gallery/nordwood-themes-1319985-unsplash.jpg')} className="image1"/></div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={require('../assets/img/exp-gallery/ryan-1321510-unsplash.jpg')} className="image1"/>></div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={require('../assets/img/exp-gallery/nic-yee-1321843-unsplash.jpg')} className="image1"/></div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={require('../assets/img/exp-gallery/phil-desforges-1322844-unsplash.jpg')} className="image1"/></div>  
            </div>
        </div>
        </div>
      );
    }
  }

export default Gallery;
