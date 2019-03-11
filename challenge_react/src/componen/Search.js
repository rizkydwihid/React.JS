import React, { Component } from 'react';
// import img from './assets/logo/logo-alterra-academy.png';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

class Search extends Component {
    render() {
      return (
        <div class="search">
            <nav class="navbar navbar-light bg-white justify-content-between">
            
            <a href="#" class="navbar-brand">Sepakbola </a>
            <a href="#" class="navbar-brand">Ekonomi </a>
            <a href="#" class="navbar-brand">Politik </a>
            <a href="#" class="navbar-brand">Hiburan </a>
            <a href="#" class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Lainnya 
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">Entertainment</a>
                    <a class="dropdown-item" href="#">Music</a>
                </div>
                </a>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
      );
    }
  }

export default Search;
