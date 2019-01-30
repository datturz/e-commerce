import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: "ADD TO CART",
            popUp: '',
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({
            buttonText: "✔ ADDED",
            popUp: 'Product Berhasil Di tambahkan'
        }, function () {
            setTimeout(() => {
                this.setState({
                    buttonText: "ADD TO CART",
                    popUp: ''
                });
            }, 2000);
        })
        this.props.addToCart();
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-12 col-md-6 col-lg-4"  >
                    <div className="card"  >
                        {this.state.popUp ?
                            <div className="alert alert-primary" role="alert">
                                {this.state.popUp}
                            </div> :
                            ''
                        }

                        <img className="card-img-top" src={`/assets/img/${this.props.gambar}`} alt="Card " style={{ maxWidth: '100px', maxHeight: '100px' }} />
                        <div className="card-body">
                            <h4 className="card-title"><a href="product.html" title="View Product">{this.props.name}</a></h4>
                            <p className="card-text">{this.props.deskrip}</p>
                            <div className="input-group input-group-sm mb-3 ">
                                <div className="input-group-prepend">
                                    <span className="decrement" onClick={this.props.kurang}>-</span>
                                </div>
                                <input style={{ maxWidth: '50px' }} type="text" value={this.props.qty} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                <div className="input-group-prepend ">
                                    <span className="increment" onClick={this.props.tambah}>+</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Link to={'/details/' + this.props.id} className="btn btn-danger btn-block"><i className="fas">Rp.</i> {this.props.harga} </Link>
                                    <br />
                                </div>

                                <div className="col">
                                    <button className="btn btn-success btn-block" onClick={this.handleClick}><i className="fas fa-cart-arrow-down"></i> {this.state.buttonText}</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}