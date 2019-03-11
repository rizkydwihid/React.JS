import React, { Component } from 'react';
import Header from './componen/Header';
import Footer from './componen/Footer';
import About from './componen/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Footer />
      </div>
    );
  }
}



export default App;
