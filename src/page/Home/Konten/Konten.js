import React, {Component} from 'react'
import './Konten.css'
export default class Konten extends Component{
    render(){
        return(
            <React.Fragment>
<section className="about">
  <div className="container">
   <div className="row  justify-content-center">
      <div className="col-lg-6 col-md-12 col-sm-12">
       <div className="card w-75">
           <img src="/assets/img/kilas1.jpeg" alt="a"/>
       </div>
      </div>
      <div className="col text-center col-lg-6 col-md-12 col-sm-12">
          <h3>Provide the best</h3>
          <h1>Beard Oil For You</h1>
          <div className="desc">
              <p>We provide the best Beard oil all over the worl. We are the world best store for Beard Oil. You can buy our product witho ut any hegitation because we always consus about our product quality and always maintain it properly so your can trust</p>
              <p>Some of our customer say’s that they trust us and buy our product without any hagitation because they belive</p>
          </div>
          <a href="about.html" className="btn btn-primary btn-outline-primary">Learn More</a>
      </div>
   </div>
  </div>
</section>
            </React.Fragment>
        )
    }
}