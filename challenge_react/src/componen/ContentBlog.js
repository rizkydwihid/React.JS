import React from 'react';
// import img from './assets/logo/logo-alterra-academy.png';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import PropTypes from "prop-types";

// class ContentBlog extends Component {
//     render() {
//       return (
//         <div class="col-md-4">
//             <br/>
//             <div class="list-group">
//                 <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
//                   <div class="d-flex w-100 justify-content-between">
//                     <h5 class="mb-1">BERITA TERKINI</h5>
//                     <a href=""><small>Lihat Semua</small></a>
//                   </div>
//                 </a>
//                 <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
//                   <div class="d-flex w-100 justify-content-between">
//                     <h5 class="mb-1">ATA Batch lulus semua!!</h5>
//                     <small class="text-muted">1 days ago</small>
//                   </div><br></br>
//                   <p class="mb-1" style={{fontSize:"14px"}}>Berita gembira datang dari salah satu perusahaan start up ...</p>
//                   <small class="text-muted" style={{fontWeight:"900"}}><img src={require('../assets/logo/logo-alterra-academy.png')} style={{width:"50px", height:"25px"}}/></small>
//                 </a>
//                 <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
//                   <div class="d-flex w-100 justify-content-between">
//                     <h5 class="mb-1">Pilih FRONT END atau BACK END?</h5>
//                     <small class="text-muted">2 days ago</small>
//                   </div><br></br>
//                   <p class="mb-1" style={{fontSize:"14px"}}>Ada 2 tipe software engineer, back end dan front end. Kalian yang mana? ..</p>
//                   <small class="text-muted" style={{fontWeight:"900"}}><img src={require('../assets/logo/logo-alterra-academy.png')} style={{width:"50px", height:"25px"}}/></small>
//                 </a>
//             </div>

//             <br/>
//         </div>
//       );
//     }
//   }

const ContentBlog = props =>{
  return (
    
        <a href={props.url} class="list-group-item list-group-item-action flex-column align-items-start ">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{props.title}</h5>
            <small class="text-muted" style={{fontSize:"10px"}}>{props.publishedAt}</small>
          </div><br></br>
          <p class="mb-1" style={{fontSize:"14px"}}>{props.content}</p>
          <small class="text-muted" style={{fontWeight:"900"}}>{props.author}</small>
        </a>

  );
}

ContentBlog.propTypes = {
  title :  PropTypes.string.isRequired,
  publishedAt : PropTypes.string.isRequired,
  content : PropTypes.string.isRequired,
  url : PropTypes.string.isRequired,
  author: PropTypes.string.isRequired

}

export default ContentBlog;
