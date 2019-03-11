import React, { Component } from 'react';
import Header from './componen/Header';
import Footer from './componen/Footer';
// import About from './componen/About';
// import Navigation from './componen/Navigation';
import Search from './componen/Search';
import ContentBlog from './componen/ContentBlog';
import ContentBlog2 from './componen/ContentBlog2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />

        <div className="container">
          <div className="row">
          <ContentBlog/>
          <ContentBlog2/>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }
}



export default App;
