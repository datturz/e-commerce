import React, { Component } from 'react'
import axios from 'axios'
import './Shopingdetails.css'
import {Link} from 'react-router-dom'

export default class Details extends Component {
    constructor(props){
    super(props)
        this.state= {
            productdetails: [],
            value: 0
        }
    } 
    componentDidMount(){
        console.log(this.props.match.params.detail)
        let det = this.props.match.params.detail
        let link = `http://localhost:3006/product/${det}`
        axios.get(link)
        .then((data)=>{
            
            this.setState({
                productdetails:data.data[0]
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    kurang = ()=>{
        let currentValue=this.state.value
        this.setState({
            value: currentValue - 1
        })
    }
    tambah = ()=>{
        let currentValue = this.state.value
        this.setState({
            value: currentValue + 1
        })
    }

    render(){
       
        return(
            <React.Fragment>
                <div  className="container" style={{marginTop:'100px'}}>
                                    <div className="row">
                                        
                                        <div className="col-12 col-lg-6">
                                            <div className="card bg-light mb-3">
                                                <div className="card-body">
                                                    <a href="/kosong" data-toggle="modal" data-target="#productModal">
                                                        <img className="img-fluid" src={`/assets/img/${this.state.productdetails.product_gambar}`} alt="detail" />
                                                        <p className="text-center">Zoom</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                
                                     
                                        <div className="col-12 col-lg-6 add_to_cart_block">
                                            <div className="card bg-light mb-3">
                                                <div className="card-body">
                                                    <p className="price">{this.state.productdetails.product_price}</p>
                                                    <p className="price_discounted">149.90 $</p>
                                                    <form>
                                                        <div className="form-group">
                                                            <label forhtml="colors">Color</label>
                                                            {/* <select className="custom-select" id="colors">
                                                                <option defaultValue>Select</option>
                                                                <option value="1">Blue</option>
                                                                <option value="2">Red</option>
                                                                <option value="3">Green</option>
                                                            </select> */}
                                                        </div>
                                                        <div className="form-group">
                            <label>Quantity :</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <button type="button" className="quantity-left-minus btn btn-danger btn-number" 
                                     onClick={this.kurang}>
                                        <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <input type="text" className="form-control"  
                                id="quantity" name="quantity" Value={this.state.value} />
                                <div className="input-group-append">
                                    <button type="button" className="quantity-right-plus btn btn-success btn-number" 
                                    onClick={this.tambah}>
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                                                        <Link to={'/carts/'+this.state.productdetails.id}   className="btn btn-success btn-lg btn-block text-uppercase">
                                                            <i className="fa fa-shopping-cart"></i> Add To Cart
                                                        </Link>
                                                    </form>
                                                    <div className="product_rassurance">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><i className="fa fa-truck fa-2x"></i><br/>Fast delivery</li>
                                                            <li className="list-inline-item"><i className="fa fa-credit-card fa-2x"></i><br/>Secure payment</li>
                                                            <li className="list-inline-item"><i className="fa fa-phone fa-2x"></i><br/>+33 1 22 54 65 60</li>
                                                        </ul>
                                                    </div>
                                                    <div className="reviews_product p-3 mb-2 ">
                                                        3 reviews
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        (4/5)
                                                        <a className="pull-right" href="reviews">View all reviews</a>
                                                    </div>
                                                    <div className="datasheet p-3 mb-2 bg-info text-white">
                                                        <a href="/askdoks" className="text-white"><i className="fa fa-file-text"></i> Download DataSheet</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="row">
                                     
                                        <div className="col-12">
                                            <div className="card border-light mb-3">
                                                <div className="card-header bg-primary text-white text-uppercase"><a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    <i className="fa fa-align-justify"></i> Description</a></div>
                                                <div className="card-body collapse" id="collapseExample">
                                                    <h1 className="card-text">
                                                        {this.state.productdetails.description}
                                                    </h1>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                
                                     
                                        <div className="col-12" id="reviews">
                                            <div className="card border-light mb-3">
                                                <div className="card-header bg-primary text-white text-uppercase"><a className="btn btn-primary" data-toggle="collapse" href="#collapseExamplee" role="button" aria-expanded="false" aria-controls="collapseExamplee"><i className="fa fa-comment"></i> Reviews</a></div>
                                                <div className="card-body collapse" id="collapseExamplee">
                                                    <div className="review">
                                                        <span className="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                                                        <meta itemProp="datePublished" content="01-01-2016" />January 01, 2018
                                
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                        <span className="fa fa-star"></span>
                                                        by Paul Smith
                                                        <div className="blockquote">
                                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                                        </div>
                                                        <hr />
                                                    </div>
                                                    <div className="review">
                                                        <span className="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                                                        <meta itemProp="datePublished" content="01-01-2016" />January 01, 2018
                                
                                                        <span className="fa fa-star" aria-hidden="true"></span>
                                                        <span className="fa fa-star" aria-hidden="true"></span>
                                                        <span className="fa fa-star" aria-hidden="true"></span>
                                                        <span className="fa fa-star" aria-hidden="true"></span>
                                                        <span className="fa fa-star" aria-hidden="true"></span>
                                                        by Paul Smith
                                                        <div className="blockquote">
                                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                                        </div>
                                                        <hr />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
            </React.Fragment>
        )
    }
}