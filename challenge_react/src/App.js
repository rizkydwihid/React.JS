import React, { Component } from 'react';
import Header from './componen/Header';
import Footer from './componen/Footer';
// import About from './componen/About';
// import Navigation from './componen/Navigation';
import Search from './componen/Search';
import ContentBlog from './componen/ContentBlog';
import ContentBlog2 from './componen/ContentBlog2';
import axios from 'axios'

const imgNOL = 0;

const apiKey = "ad053b2f0cb649a4856a94bd79194502";
const baseURL = "https://newsapi.org/v2/";
const source = "bbc-news";
const contry = "us";
const urlHeadLine = baseURL + "top-headlines?sources=" + source + "&apiKey=" + apiKey;
const urlHeadLine2 = baseURL + "top-headlines?country=" + contry + "&apiKey=" + apiKey;

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      listNews: [],
      listNews2: [],
      username: "",
      islogin: false
    }
  }

  componentDidMount = () => {
    const self = this;
    axios
    .get(urlHeadLine)
    .then(function(response){
      self.setState({listNews: response.data.articles})
    })
    axios
    .get(urlHeadLine2)
    .then(function(response){
      self.setState({listNews2: response.data.articles})
    })
    .catch(function(error){
    });
  }


  render() {
    const {listNews, listNews2, username, isilogin} = this.state;
    return (
      <div className="App">
        <Header />
        <Search />
        
        <div className="container">
          <div className="row">
            <div class="col-md-4">
              <br/>
              <div class="list-group-item list-group-item-action flex-column align-items-start active">
                <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">BERITA TERKINI</h5>
              <a href=""><small>Lihat Semua</small></a>
            
        </div>
        </div>
          {listNews2.map((item, key) => {
            return <ContentBlog key={key} title={item.title} url={item.url} publishedAt={item.publishedAt} author={item.author}/> 
          })}
          <br/>
          </div>
        
          <div class="col-md-8">
          
            {listNews.map((item,key) => {
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



export default App;
