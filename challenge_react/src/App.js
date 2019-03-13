import React, { Component } from 'react';
// import Header from './componen/Header';
// import Navigation from './componen/Navigation';
import Footer from './componen/Footer';
// import About from './componen/About';
// import Navigation from './componen/Navigation';
import Search from './componen/Search';
import ContentBlog from './componen/ContentBlog';
import ContentBlog2 from './componen/ContentBlog2';
// import axios from 'axios';
import {connect} from 'unistore/react';
import {withRouter} from 'react-router-dom';
import {actions} from './Store';

const imgNOL = 0;


class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      listNews: [],
      listNews2: [],
      username: "",
      islogin: false,
      search: ""
    }
  }

  componentDidMount = () => {
    // const self = this;
    this.props.getURLHeadnews()

  }

  handleInputChange = e => {
    console.log("even", e.target.value);
    let value = e.target.value;

    this.setState(
      {
        search: value
      },
    () => {
      this.props.searchNews(value)
    }
    );
  };

  ekonomi = e => {
    this.props.searchCategory('Economi')
  }
  politik = e => {
    this.props.searchCategory('Politic')
  }
  market = e => {
    this.props.searchCategory('Market')
  }
  

  render() {
    const {listNews, listNews2, username, isilogin} = this.state;
    return (
      <div className="App">
        <Search doSearch={this.handleInputChange} doClick={this.ekonomi} doClick2={this.politik} doClick3={this.market}/>
        
        <div className="container">
          <div className="row">
            <div class="col-md-4">
              <br/>
              <div class="list-group-item list-group-item-action flex-column align-items-start active">
                <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">BERITA TERKINI</h5>
            
        </div>
        </div>
          {this.props.listNews2.map((item, key) => {
            return <ContentBlog key={key} title={item.title} url={item.url} publishedAt={item.publishedAt} author={item.author}/> 
          })}
          <br/>
          </div>
        
          <div class="col-md-8">
          
            {this.props.listNews.map((item,key) => {
              const src_img = item.urlToImage === null ? imgNOL : item.urlToImage;
              const src_content = item.urlToImage !== null ? item.content : "";
              return <ContentBlog2 key={key} title={item.title} publishedAt={item.publishedAt} content={src_content} img={src_img} author={item.author}/>;
            })}
          </div>  
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default connect("listNews, listNews2", actions)(withRouter(App));



