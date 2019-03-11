import React, { Component } from 'react';
// import img from './assets/logo/logo-alterra-academy.png';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

class About extends Component {
    render() {
      return (
        <div>
        <div className="bg">
            <div className="container text-center">
                <div>
                    <div className="row">
                        <div class="text-center col-md-12">
                        <img src={require('../assets/img/hian2.jpeg')} className="rounded-circle marginprofil pp" alt="" />
                    </div>
                    <div className="text-center col-md-12 jarakprofil">
                        <h4 id="hian">Hian Oliviera</h4>
                        <a><img src={require('../assets/ico/ico-location.png')} /> Malang, East Java, Indonesia</a>
                        <h5>Frontend Dev, UI/UX and Design</h5>
                        <button className="btn btn-primary" id="btn-download">Download CV</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row box shadow p-5 mb-5 bg-white rounded">
                <div className="col-md-6 info">
                    <h1>About Me</h1>
                    <br />
                    <p>Hi! I am UM Team, I work as a Front-end Developer at Alterra Group.</p>
                    <p>Front-end Developer are constructive work websites use HTML, CSS, and JavaScript.</p>
                    <p>Front-end Developer are the people who make it design and develop the design untuk become a website that can run.</p>
                </div>
                <div className="col-md-6 info">
                    <h1>Information</h1>
                    <br />
                    <table className="table table-striped table-bordered col-md-8 table-width">
                        <tr>
                            <th scope="row">Age</th>
                            <td>: 22th</td>
                            <td>: 1945th</td>

                        </tr>
                        <tr>
                            <th scope="row">Email</th>
                            <td>: hian.oliviera@alterra.id</td>
                            <td>: smaqueenyaqueen@wakanda.af</td>
                        </tr>
                        <tr>
                            <th scope="row">Address</th>
                            <td>: Jl. Simpang Tambora I No. 9, Karang Besuki, Sukun, Malang, 65146</td>
                            <td>: Jl. Tronjal Tronjol No. 10 Wakanda Utara</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        </div>
      );
    }
  }

export default About;
