import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Modal from '../Modal/Modal'

import './Navbar.css'
export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                {/* {console.log(this.state.data)} */}
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="kosong"><img src="./assets/img/logobeard.png" style={{ maxWidth: '100px' }} alt="logo" /></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav ml-auto topnav">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/shoping">Shop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    {console.log(this.props.userOn)}
                                    {this.props.userOn ?
                                        <Link to="/sign" className="btn btn-outline-primary">
                                            <i className="fas fa-sign-in-alt"></i>
                                            <span>Login</span></Link>
                                        : this.props.userOn
                                    }
                                </li>

                            </ul>

                            <button className="btn btn-outline-primary">
                                <span className="glyphicon glyphicon-shopping-cart" data-toggle="modal" data-target="#exampleModal">
                                    <i className="fas fa-shopping-cart"></i>
                                    <span className="counter" >
                                        No. of Items: {this.props.noItems} </span>
                                    <span className="counter">
                                        Total: Rp.{this.props.total}
                                    </span>
                                </span></button>

                        </div>
                    </div>

                </nav>

            </React.Fragment>

        )
    }
}