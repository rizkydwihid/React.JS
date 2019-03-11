import React, { Component } from 'react';
// import img from './assets/logo/logo-alterra-academy.png';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

class Contact extends Component {
    render() {
      return (
          <div class="row container-fluid">
              <div class="col-md-6 d-md-block d-none contact-left-container">
                  <img class=" contact-logo-position" src={require("../assets/logo/logo-alterra-academy-plain@2x.png")}/>
              </div>
              <div class="col-md-6">
                  <div class="container contact-us">
                      <h3>Contact Us</h3>
                      <p>Send us message and we will get back to you as soon as possible</p>
                      <br></br>
                      <form class="col-md-11">
                          Name<span class="red">*</span>
                          <br></br>
                          <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><img src={require("../assets/ico/ico-user.png")}/></span>
                              </div>
                              <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                          </div>
                          Email<span class="red">*</span>
                          <br></br>
                          <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><img src={require("../assets/ico/ico-email.png")} width="19" height="23"/></span>
                              </div>
                              <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
                          </div>
                          Phone Number<span class="red">*</span>
                          <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><img src={require("../assets/ico/ico-phone.png")} width="19" height="23"/></span>
                              </div>
                              <input type="text" class="form-control" placeholder="Phone Number" aria-label="Phonenumber" aria-describedby="basic-addon1"/>
                          </div>
                          National
                          <div class="input-group">
                              <select class="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                                  <option value="Indonesia" selected>Indonesia</option>
                                  <option value="Malaysia">Malaysia</option>
                                  <option value="Singapore">Singapore</option>
                                  <option value="Japan">Japan</option>
                              </select>
                          </div>
                          <div class="form-group">
                              <label for="comment">Comment:</label>
                              <textarea class="form-control" rows="5" id="comment"></textarea>
                          </div>
                          <button class="btn btn-lg col-12" id="btn-submit">Submit</button>
                          <br></br>
                      </form>
                  </div>
              </div>
          </div>
      )
    }
  }
  
  export default Contact;