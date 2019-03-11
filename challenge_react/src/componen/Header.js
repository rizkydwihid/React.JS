import React, { Component } from 'react';
// import img from './assets/logo/logo-alterra-academy.png';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

class Header extends Component {
    render() {
      return (
        <header className="container">
            <div className="row">
              <div className="col-md-6 offset-4 col-4 offset-md-0">
                  <a className="navbar-brand marginlogo" href="#">
                      <img src={require('../assets/logo/logo-alterra-academy.png')} />
                  </a>
              </div>
              <div className="col-md-6">
                <ul className="nav navbar-content-end nav-kanan">
                    <li className="nav-item">
                      <a className="nav-link" id="active" href="#">ABOUT</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="galery.html">GALLERY</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="contact.html">CONTACT</a>
                    </li>
                </ul>
                </div>
            </div>
        </header>
      );
    }
  }

export default Header;
