import React, { Component } from 'react'
// import Shoping from '../page/Shoping/Shoping'
import Contact from '../page/Contact/Contact'
import About from '../page/About/About'
import Home from '../page/Home/Home'
// import Sign from '../page/Sign/Signin'
import Signup from '../page/Signup/Signup'
import Details from '../page/Shoping/Shopingdetail'
import Cart from '../page/Shoping/Cart'
import { Route, Switch } from 'react-router-dom'
export default class Routes extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/home' component={Home} />
                    {/* <Route path='/shoping' component={Shoping} /> */}
                    {/* <Route
                        path='/shoping'
                        render={(props) => <Shoping {...props} onGetCart={this.props.getCart} />}
                    /> */}
                    <Route path='/details/:detail' component={Details} />
                    {/* <Route path='/details/:detail' render={(props) => <Details {...props} />} /> */}
                    <Route path='/carts/:cart' component={Cart} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/about' component={About} />
                    {/* <Route path='/sign' component={Sign} /> */}
                    <Route path='/signup' component={Signup} />
                </Switch>
            </React.Fragment>

        )
    }
}