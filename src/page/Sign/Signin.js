import React, { Component } from 'react'
import './Sign.css'
import axios from 'axios';
import SweetAlert from 'sweetalert2-react'

export default class Sigin extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            cobaLogin: false,
            show: false,
            message: '',
            nampungData: []
        }
    }
    // componentWillMount() {
    //     // if (localStorage.getItem('dataToken')) {
    //     //     this.setState({
    //     //         email: JSON.parse(localStorage.getItem('dataToken')).email,
    //     //         password: JSON.parse(localStorage.getItem('dataToken')).password,
    //     //         cobaLogin: true
    //     //     })
    //     // } else {
    //     //     console.log('Anda Belum Login')
    //     // }

    // }


    login = () => {
        let dataToken = { email: this.state.email, password: this.state.password }
        localStorage.setItem('dataToken', JSON.stringify(dataToken))
        this.setState({ cobaLogin: true })
        axios.post('http://localhost:3006/sign', dataToken)
            .then(x => {
                if (x.data.code === 204) {
                    this.setState({
                        show: true,
                        message: "Email and Password Does Not Exist"
                    }, function () {
                        setTimeout((x) => {
                            this.setState({
                                show: false,
                                message: ''
                            });
                        }, 2000);
                    })
                } else if (x.data.code === 200) {
                    this.setState({
                        show: true,
                        message: "Login Succes",
                        nampungData: x.data.results
                    }, function () {
                        setTimeout(() => {
                            this.setState({
                                show: false,
                                message: ''
                            });
                            this.props.history.push('/')
                        }, 2000);
                    })
                } else {
                    this.setState({
                        show: true,
                        message: "email not registered"
                    }, function () {
                        setTimeout(() => {
                            this.setState({
                                show: false,
                                message: ''
                            });
                        }, 2000);
                    })
                }

            })
            .catch(err => {
                console.log(err)
            })
        this.props.masuk(this.state.nampungData)
        // this.props.history.push('/')
    }
    logout = () => {
        localStorage.removeItem('dataToken')
    }
    render() {

        return (
            <React.Fragment>
                {/* {console.log(this.state.nampungData)} */}
                <div className="container login">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Sign In</h5>
                                    {/* <button onClick={this.logout}>Logout</button> */}
                                    {this.state.show ?
                                        <SweetAlert
                                            show={this.state.show}
                                            title="Alert"
                                            text={this.state.message}
                                            onConfirm={() => this.setState({ show: false })}
                                        /> :
                                        ''
                                    }
                                    <form className="form-signin" onSubmit={e => {
                                        e.preventDefault()
                                    }}>

                                        <label>Email</label>
                                        <div className="form-label-group">
                                            <input type="email" id="email"

                                                onChange={e => {
                                                    this.setState({
                                                        email: e.target.value
                                                    })
                                                }}
                                                ref="email"
                                                name="email"
                                                className="form-control col-form-label-lg" placeholder="Email address" required autoFocus />
                                        </div>

                                        <div className="form-label-group">
                                            <input type="password" id="password"

                                                onChange={e => {
                                                    this.setState({
                                                        password: e.target.value
                                                    })
                                                }}
                                                ref="password"
                                                name="password"
                                                className="form-control col-form-label-lg" placeholder="Password" required />
                                            <label htmlFor="password">Password</label>
                                        </div>

                                        <div className="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                        </div>
                                        <button className="btn btn-lg btn-primary btn-block text-uppercase"
                                            type="submit"
                                            // disabled={!this.validateForm()}
                                            onClick={this.login}


                                        >Sign in</button>

                                        <button onClick={this.logout}>Logout</button>
                                        <hr className="my-4" />
                                        <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                                        <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}