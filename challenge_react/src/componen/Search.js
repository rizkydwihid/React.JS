import React, { Component } from 'react';
// import img from './assets/logo/logo-alterra-academy.png';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import PropTypes from "prop-types";

class Search extends Component {
    render() {
      return (
        <div class="search">
            <nav class="navbar navbar-light bg-white justify-content-between">
            <span> News</span>
            <span> ||</span>
            <a href="#" onClick={this.props.doClick}>Economi </a>
            <a href="#" onClick={this.props.doClick2}>Politic </a>
            <a href="#" onClick={this.props.doClick3}>Market </a>
            
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder={this.props.placeholder} aria-label="Search" value={this.props.keyword} onChange={this.props.doSearch}/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
      );
    }
  }

  Search.propTypes = {
    placeholder : PropTypes.string.isRequired
  };

export default Search;
