import React, { Component } from 'react';
// import Header from './componen/Header';
// import Navigation from './componen/Navigation';
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
const source = "bitcoin";
const contry = "us";
const urlHeadLine = baseURL + "everything?q=" + source + "&apiKey=" + apiKey;
const urlHeadLine2 = baseURL + "top-headlines?country=" + contry + "&apiKey=" + apiKey;

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

  handleInputChange = e => {
    console.log("even", e.target.value);
    let value = e.target.value;

    this.setState(
      {
        search: value
      },
    () => {
      this.searchNews(value)
    }
    );
  };

  handleClick = e => {
    console.log("event", e);
    let economi = "Economi"
    this.setState(
      () => {
        this.searchCategory(economi);
      }
    )
  }

  handleClick2 = e => {
    console.log("event", e);
    let politic = "Politic"
    this.setState(
      () => {
        this.searchCategory(politic);
      }
    )
  }
  
  handleClick3 = e => {
    console.log("event", e);
    let market = "Market"
    this.setState(
      () => {
        this.searchCategory(market);
      }
    )
  }

  searchCategory = async value => {
    console.log("searchCategory", value);
    const self = this ;
    try {
      const response = await axios.get(
        baseURL + "everything?q=" + value + "&apiKey=" + apiKey
      )
      console.log(response);
      self.setState({listNews: response.data.articles})
    }catch (error){
      console.log(error);
    }
  }

  searchNews = async keyword => {
    console.log("searchNews", keyword);
    const self = this;
    if (keyword.length > 2){
      try{
        const response = await axios.get(
          baseURL + "everything?q=" + keyword + "&apiKey=" + apiKey
          )
          console.log(response);
          self.setState({ listNews: response.data.articles})
          } 
          catch(error){
          console.error(error);
          }
      }
    }
  

  render() {
    const {listNews, listNews2, username, isilogin} = this.state;
    return (
      <div className="App">
        <Search doSearch={this.handleInputChange} doClick={this.handleClick} doClick2={this.handleClick2} doClick3={this.handleClick3}/>
        
        <div className="container">
          <div className="row">
            <div class="col-md-4">
              <br/>
              <div class="list-group-item list-group-item-action flex-column align-items-start active">
                <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">BERITA TERKINI</h5>
            
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



