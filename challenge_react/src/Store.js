import createStore from 'unistore';
import axios from 'axios';

const apiKey = "ad053b2f0cb649a4856a94bd79194502";
const baseURL = "https://newsapi.org/v2/";
const keyword = "bitcoin";
const contry = "us";
const urlHeadLine = baseURL + "everything?q=" + keyword + "&pageSize=5&apiKey=" + apiKey;
const urlHeadLine2 = baseURL + "top-headlines?country=" + contry + "&pageSize=5&apiKey=" + apiKey;

const initialStore = {
    api_key: "",
    email: "",
    password: "",
    username: "",
    full_name:"",
    listNews:[],
    listNews2:[],
    is_login: false
    
};

export const store = createStore(initialStore)

export const actions = store => ({
    setField: (state, event) => {
        return { [event.target.name]: event.target.value };
    },
    postLogout: state => {
        return { is_login: false };
    },
    
    getURLHeadnews: async state =>{
    await axios
        .get(urlHeadLine)
        .then(function(response){
            store.setState({listNews: response.data.articles})
        })
    await axios
        .get(urlHeadLine2)
        .then(function(response){
            store.setState({listNews2: response.data.articles})
        })
    .catch(function(error){
        });
    },
    searchNews : async(state, keyword )=> {
        if (keyword.length > 2){
          try{
            const response = await axios.get(
              baseURL + "everything?q=" + keyword + "&apiKey=" + apiKey
              )
              console.log(response);
              store.setState({ listNews: response.data.articles})
              } 
              catch(error){
              console.error(error);
              }
          }
        },
        searchCategory : async(state,  value) => {
            // console.log("searchCategory", value);
            // const self = this ;
            try {
              const response = await axios.get(
                baseURL + "everything?q=" + value + "&apiKey=" + apiKey
              )
            //   console.log(response);
              store.setState({listNews: response.data.articles})
            }catch (error){
              console.log(error);
            }
          },
    postLogin: async state => {
        const data = {username: state.username, password: state.password};
        await axios
        .post("https://newapi.free.beeceptor.com/signin", data)
        .then(response => {
            console.log("postLogin resp", response.data);
            if (response.data.hasOwnProperty("api_key")) {
                store.setState({
                    is_login: true,
                    api_key: response.data.api_key,
                    full_name: response.data.full_name,
                    email: response.data.email
                });
            }
        })
        .catch( error => {
            console.log(error);
        })
    }
});