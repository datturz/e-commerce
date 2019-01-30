import React, { Component } from 'react'

import './Slider.css'
export default class Slider extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='asu'  >
          <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{ marginTop: '55px' }} data-ride="carousel">
            <div className="carousel-inner " >
              <div className="carousel-item active" >
                <img className="d-block w-100" src="assets/slider/S11.jpg" alt="second" />
                <div className="col">
                  <div className="carousel-caption d-none d-md-block ">
                    <h5 className="kiri">Beard Oil </h5>
                    <p className="kanan">For Glossy And Stylish Beard</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="/assets/slider/S3.png" alt="Second slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="kiri">Beard Oil </h5>
                  <p className="kanan">For Glossy And Stylish Beard</p>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="assets/slider/S2.jpg" alt="Third slide" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Beard Oil </h5>
                  <p>For Glossy And Stylish Beard</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div >
      </React.Fragment >
    )
  }
}