import React from 'react';
import PropTypes from "prop-types";

// class ContentBlog2 extends Component {
//   render() {
//     return (
//       <div class="col-md-8">

//         <h3 class="my-4">Apa yang kalian lakukan ketika suntuk?</h3>

//         <div class="card mb-4">
//           <img class="card-img-top" src={require("../assets/img/img-header.png")} alt="Card image cap"/>
//           <div class="card-body">
//             <h4 class="card-title">Suntuk ketika banyak tugas yang menumpuk memang berat.</h4>
//             <p class="card-text">Salah satu hal yang bisa kamu lakukan untuk menghilangkan rasa suntuk kalian adalah cari hal-hal yang bisa menaikkan mood. Contohnya seperti mendengarkan musik, makan sesuatu yang kalian suka, dan masih banyak lainnya.</p>
//             <a href="#" class="btn btn-primary">Read More &rarr;</a>
//           </div>
//           <div class="card-footer text-muted">
//             Posted on January 1, 2019 by
//             <a href="#"> Alterra Academy</a>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }


const ContentBlog2 = props =>{
  return (
      <div class="card mb-4 my-4">
      <h3 class="my-4" style={{textAlign:"center"}}>{props.title}</h3>
           <img class="card-img-top" src={props.img} alt="Card image cap"/>
           <div class="card-body">
             <p class="card-text">{props.content}</p>
             <a href="#" class="btn btn-primary">Read More &rarr;</a>
           </div>
        <div class="card-footer text-muted">
             {props.publishedAt} <br></br>
             by {props.author}
        </div>
      </div>
    
  );
}

ContentBlog2.propTypes = {
  title :  PropTypes.string.isRequired,
  publishedAt : PropTypes.string.isRequired,
  content : PropTypes.string.isRequired,
  img : PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default ContentBlog2;