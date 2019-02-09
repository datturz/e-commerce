import React, { Component } from 'react'
import './Shoping.css'
import axios from 'axios'
import Card from '../../komponen/Card/Card.js'
export default class Shoping extends Component {
    constructor() {
        super();
        this.state = {
            product: [],
            cart: []
        }
        this.addToCart = this.addToCart.bind(this);
    }
    componentDidMount() {
        let url = 'http://localhost:3006/product'
        axios.get(url)
            .then((x) => {
                this.setState({
                    loading: '',
                    product: x.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    addToCart = (selecTedItem) => {
        let cartItems = this.state.cart
        let ids = this.state.product.id
        let qtyy = this.state.product.quantity
        if (this.checkProduct(ids)) {
            console.log('hi')
            let index = cartItems.findIndex((x => x.id === ids))
            cartItems[index].quantity = Number(cartItems[index].quantity) + Number(qtyy)
            this.setState({
                cart: cartItems
            })
        } else {
            cartItems.push(selecTedItem)
            this.setState({
                cart: cartItems
            })
        }
        let dataItem = this.state.cart
        localStorage.setItem('cart', JSON.stringify(dataItem))
        localStorage.getItem('cart')
        this.props.onCartClick(this.state.cart)
    }
    tambah(quantity, indexToChange) {
        this.setState({
            product: this.state.product.map((product, index) => {
                if (index === indexToChange) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                }
                return product
            })
        }
        )
    }
    kurang(quantity, indexToChange) {
        this.setState(
            {
                product: this.state.product.map((product, index) => {
                    console.log(indexToChange);
                    if (index === indexToChange) {
                        return {
                            ...product,
                            quantity: product.quantity - 1
                        }
                    };
                    return product;
                })
            });
    }
    checkProduct(productID) {
        let cart = this.state.cart;
        return cart.some(function (product) {
            return product.id === productID;
        });
    }

    render() {

        return (
            <React.Fragment>
                {console.log(this.state.cart)}
                <div className="container section">
                    <div className="row">
                        <div className="col">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page"> <a href="category.html">Category </a> </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div >

                {/* <button onClick={this.check}>BUTTON</button> */}
                <div className="container section1">
                    <div className="row">
                        <div className="col-12 col-sm-3">
                            <div className="card bg-light mb-3">
                                <div className="card-header bg-primary text-white text-uppercase"><i className="fa fa-list"></i> Categories</div>
                                <ul className="list-group category_block">
                                    <li className="list-group-item"><a href="category.html">Wak Doyok</a></li>
                                    <li className="list-group-item"><a href="category.html">Beard</a></li>
                                    <li className="list-group-item"><a href="category.html">Folti Baffi</a></li>
                                    <li className="list-group-item"><a href="category.html">Real Man</a></li>
                                    <li className="list-group-item"><a href="category.html">Vestibulum at eros</a></li>
                                </ul>
                            </div>
                            <div className="card bg-light mb-3">
                                <div className="card-header bg-success text-white text-uppercase">Last product</div>
                                <div className="card-body">
                                    <img className="img-fluid" src="https://obatpenumbuhjenggotpalingampuh.files.wordpress.com/2017/08/folti-24.png?w=300&h=300" alt='tes' />
                                    <h5 className="card-title">Folti Baffi</h5>
                                    <p className="card-text">Obat jerman</p>
                                    <p className="bloc_left_price"><i className="fas fa-dollar-sign"></i> 99.00 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                {
                                    this.state.product.map((product, id) =>
                                        <Card
                                            key={id}
                                            id={product.id}
                                            gambar={product.product_gambar}
                                            name={product.product_name}
                                            deskrip={product.product_deskrip}
                                            harga={product.product_price}
                                            qty={product.quantity}
                                            tambah={text => this.tambah(text, id)}
                                            kurang={text => this.kurang(text, id)}
                                            addToCart={() => this.addToCart(product)}
                                        />
                                    )
                                }


                                <div className="col-12">
                                    <nav aria-label="...">
                                        <ul className="pagination">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="/" tabIndex="-1">Previous</a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="/">1</a></li>
                                            <li className="page-item active">
                                                <a className="page-link" href="/">2 <span className="sr-only">(current)</span></a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="/">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="/">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment >
        )
    }
}