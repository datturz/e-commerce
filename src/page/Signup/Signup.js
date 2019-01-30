import React, { Component } from 'react'
import './Signup.css'
import axios from 'axios'
export default class Signup extends Component {
	constructor() {
		super()
		this.state = {
			firstname: '',
			lastname: '',
			address: '',
			city: '',
			state: '',
			zip: '',
			phone: '',
			email: '',
		}
	}
	kirimData = () => {
		let url = 'http://localhost:3006/signup'
		axios.post(url, {
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			address: this.state.address,
			city: this.state.city,
			state: this.state.state,
			zip: this.state.zip,
			phone: this.state.zip,
			email: this.state.email,
			password: this.state.password
		})
			.then((output) => {
				console.log(output.data)
			})
			.catch((err) => {
				console.log(err)
			})
		this.props.history.push('/')
	}
	render() {
		return (
			<React.Fragment>

				<div className="container signup" >

					<div className="col-lg-12  mx-auto">
						<div className="row">

							<div className="card card-signup">

								<div className="card-body">
									<h5 className="card-title section-title"><span><i className="fas fa-user-circle"></i> Register</span></h5>
									<div className="garis m-auto"></div>
									<form onSubmit={(e) => { e.preventDefault() }} >
										<div className="col-sm-12">
											<div className="row">
												<div className="col-sm-6 form-group">
													<label>First Name</label>
													<input type="text" placeholder="Enter First Name Here.." className="form-control"
														onChange={(e) => {
															this.setState({
																firstname: e.target.value
															})
														}}
													/>
												</div>
												<div className="col-sm-6 form-group">
													<label>Last Name</label>
													<input type="text" placeholder="Enter Last Name Here.."
														onChange={(e) => {
															this.setState({
																lastname: e.target.value
															})
														}}
														className="form-control" />
												</div>
											</div>
											<div className="form-group">
												<label>Address</label>
												<textarea placeholder="Enter Address Here.." rows="3"
													onChange={(e) => {
														this.setState({
															address: e.target.value
														})
													}}
													className="form-control"></textarea>
											</div>
											<div className="row">
												<div className="col-sm-4 form-group">
													<label>City</label>
													<input type="text" placeholder="Enter City Name Here.."
														onChange={(e) => {
															this.setState({
																city: e.target.value
															})
														}}
														className="form-control" />
												</div>
												<div className="col-sm-4 form-group">
													<label>State</label>
													<input type="text" placeholder="Enter State Name Here.."
														onChange={(e) => {
															this.setState({
																state: e.target.value
															})
														}}
														className="form-control" />
												</div>
												<div className="col-sm-4 form-group">
													<label>Zip</label>
													<input type="text" placeholder="Enter Zip Code Here.."
														onChange={(e) => {
															this.setState({
																zip: e.target.value
															})
														}}
														className="form-control" />
												</div>
											</div>

											<div className="form-group">
												<label>Phone Number</label>
												<input type="text" placeholder="Enter Phone Number Here.."
													onChange={(e) => {
														this.setState({
															phone: e.target.value
														})
													}}
													className="form-control" />
											</div>
											<div className="form-group">
												<label>Email Address</label>
												<input type="text" placeholder="Enter Email Address Here.."
													onChange={(e) => {
														this.setState({
															email: e.target.value
														})
													}}
													className="form-control" />
											</div>
											<div className="form-group">
												<label>Password</label>
												<input type="text" placeholder="Enter Email Address Here.."
													onChange={(e) => {
														this.setState({
															password: e.target.value
														})
													}}
													className="form-control" />
											</div>

											<button type="button" className="btn btn-lg btn-info"
												onClick={this.kirimData}
											>Submit</button>
											{/* <input type="submit" value="submit" /> */}
										</div>
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