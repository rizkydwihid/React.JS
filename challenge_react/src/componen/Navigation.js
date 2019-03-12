import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

const Navigation = props => {
    return (
        <header className="container">
            <div className="row">
              <div className="col-md-3 offset-4 col-4 offset-md-0">
                  <a className="navbar-brand marginlogo" href="#">
                      <img src={require('../assets/logo/logo-alterra-academy.png')} />
                  </a>
              </div>
              <div className="col-md-9">
                <ul className="nav navbar-content-end nav-kanan">
                    <li className="nav-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/galerry">Gallery</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/news">News</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/profil">Profile</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/signin">Login</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/" onClick={() => props.postSignout()}>Logout</Link>
                    </li>
                </ul>
                </div>
            </div>
        </header>
      );
    }
  
export default Navigation;