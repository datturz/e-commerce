import React, { Component } from 'react';
import CartItems from './CartsItems'
import { Link } from 'react-router-dom'
export default class ShoppingCart extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">@</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Sub-Total</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>{this.props.cart.map((item, i) => {
                                    if (item.quantity !== 0) {
                                        return <CartItems
                                            key={i}
                                            id={item.id}
                                            item_num={i + 1}
                                            item={item.product_gambar}
                                            name={item.product_name}
                                            quantity={item.quantity}
                                            price={item.product_price}
                                            onRemovess={this.props.onRemoves}

                                        />
                                    }
                                    else { return null }
                                })
                                }
                                </tbody>
                                <tfoot>
                                    {this.props.cart.length === 0 ? <tr>
                                        <td colSpan="5">Empty Cart</td>
                                    </tr> :
                                        <tr>
                                            <td colSpan="5" style={{ textAlign: 'center' }}>Total: Rp.{this.props.tot}
                                                <br />
                                                <br />
                                                <Link to="/check" className="btn btn-warning" data-dismis='modal'>Proced Checkout</Link></td></tr>

                                    }
                                </tfoot>
                                {/* {console.log(this.props.checkOut)} */}
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

