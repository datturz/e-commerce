import React, { Component } from 'react'
import axios from 'axios';
export default class Cart extends Component {
    constructor() {
        super()
        this.state = {
            cart: [],
            total: ''
        }
    }
    componentWillMount() {
        console.log(this.props)
        let cartt = this.props.match.params.cart
        let link = `http://localhost:3006/product/${cartt}`
        axios.get(link)
            .then((x) => {
                this.setState({
                    cart: x.data[0]
                })
                console.log(this.state.cart)
            })
            .catch(err => {
                console.log(err)
            })

    }
    jumla = (e) => {
        this.setState({
            total: this.state.cart.product_price * e.target.value
        })

    }

    render() {
        return (
            <React.Fragment >
                {console.log(this.state.cart)}
                <div className="container mb-4" style={{ marginTop: '100px' }}>
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col"> </th>
                                            <th scope="col">Product</th>
                                            <th scope="col">Available</th>
                                            <th scope="col" className="text-center">Quantity</th>
                                            <th scope="col" className="text-right">Price</th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td><img src={`/assets/img/${this.state.cart.product_gambar}`} alt="as" style={{ maxWidth: '50px', maxHeight: '50px' }} /></td>
                                            <td>{this.state.cart.product_name}</td>
                                            <td>In stock</td>
                                            <td><input className="form-control" type="text" onChange={this.jumla} /></td>
                                            <td className="text-right">Rp.{this.state.cart.product_price}</td>
                                            <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
                                        </tr>

                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>Sub-Total</td>
                                            <td className="text-right"></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>Shipping</td>
                                            <td className="text-right"></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><strong>Total</strong></td>
                                            <td className="text-right"><strong >Rp.{this.state.total}</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col mb-2">
                            <div className="row">
                                <div className="col-sm-12  col-md-6">
                                    <button className="btn btn-block btn-light">Continue Shopping</button>
                                </div>
                                <div className="col-sm-12 col-md-6 text-right">
                                    <button className="btn btn-lg btn-block btn-success text-uppercase" onClick={this.bayar}>Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment >
        )
    }
}