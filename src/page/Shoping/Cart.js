import React, { Component } from 'react'
import axios from 'axios';
export default class Cart extends Component {
    constructor() {
        super()
        this.state = {
            dataCheckOut: [],
            totalHarga: ""
        }
    }
    componentWillMount() {
        console.log(this.props.cart)
        this.setState({
            dataCheckOut: this.props.cart
        })

    }
    // jumla = (e) => {
    //     this.setState({
    //         total: this.state.cart.product_price * e.target.value
    //     })

    // }

    display() {
        return this.state.dataCheckOut.map((value, index) => {
            var nam = value.product_name
            var img = value.product_gambar
            var quantity = value.quantity
            var price = value.product_price
            var total = value.quantity * value.product_price

            return (
                <React.Fragment>
                    <tr>
                        <td><img src={`/assets/img/${img}`} alt="as" style={{ maxWidth: '50px', maxHeight: '50px' }} /></td>
                        <td>{nam}</td>
                        <td>In stock</td>
                        <td><input className="form-control" type="text" value={quantity} /></td>
                        <td className="text-right">Rp.{price}</td>
                        <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
                    </tr>
                </React.Fragment>
            )
        })

    }
    kirim = () => {
        var abc = JSON.parse(localStorage.getItem('id_user'))
        var carItem = JSON.parse(localStorage.getItem('cart'))
        console.log('ini product_id' + carItem.id)
        let dataItemCart = {
            pengguna_id: abc.id,
            product_id: carItem.id,
            qty: carItem.quantity,
            total: carItem.reduce((hasul, item) => {
                return hasul += item.quantity * item.product_price
            })
        }
        let url = 'http://localhost:3006/checkout'
        axios.post(url, dataItemCart)
            .then((info) => {
                console.log(info)
                localStorage.removeItem('cart')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        console.log(this.props.cart)
        return (
            <React.Fragment >
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
                                        {this.display()}
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><strong>Total</strong></td>
                                            <td className="text-right"><strong >Rp.{this.props.cart.reduce((hasil, item) => {
                                                return hasil += item.quantity * item.product_price
                                            }, 0)}</strong></td>
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
                                    <button className="btn btn-lg btn-block btn-success text-uppercase" onClick={this.kirim()}></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment >
        )
    }
}