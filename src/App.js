import React, { Component } from 'react'
import Footer from './komponen/Footer/Footer'
import Routes from './routes/Routes'
import Navbar from './komponen/Navbar/Navbar'
import { Route } from 'react-router-dom'
import Modal from './komponen/Cart/ModalCart'
import Shoping from './page/Shoping/Shoping'
// import axios from 'axios';
import Sign from './page/Sign/Signin'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cart: [],
      dataUser: [],
    }
    this.onRemove = this.onRemove.bind(this)
  }
  getCart = (x) => {
    this.setState({
      cart: x
    })
    // console.log(this.state.cart)
  }
  onCheckOut = (x) => {

    localStorage.removeItem('cart')
  }
  onRemove(indexToRemove) {
    // let cart = this.state.cart
    // console.log(cart)
    // let index = cart.some((x) => { return x.id === indexToRemove });
    // console.log(index)
    // this.state.cart.splice(index, 1);
    // this.setState({
    //   cart: this.state.cart.splice(0, -1)
    // })

  }
  getLogin = (x) => {
    console.log(x)
    // this.setState({
    //   dataUser: x
    // })
  }

  render() {
    return (
      <React.Fragment>
        {/* {console.log(this.state.dataUser)} */}
        <Navbar
          noItems={this.state.cart.length}// menghitung jumlah item yang masuk ke cart
          total={this.state.cart.reduce((hasil, item) => {
            return hasil += item.quantity * item.product_price
          }, 0)}
          userOn={this.state.dataUser}
        />
        <Modal
          thecart={this.state.cart}
          onRemoves={this.onRemove}
          checkiOut={this.onCheckOut}
          total={this.state.cart.reduce((hasil, item) => {
            return hasil += item.quantity * item.product_price
          }, 0)}
        />

        <Route exact path='/shoping'
          render={(props) => <Shoping {...props} onCartClick={this.getCart} />} />
        <Route exact path='/sign'
          render={(props) => <Sign {...props} masuk={this.getLogin} component={Sign} />} />
        <Routes />
        <Footer />

      </React.Fragment>
    )
  }
}

export default App;
