import React, { Component } from 'react'
export default class Carts extends Component {

    render() {
        return (
            <React.Fragment>
                <tr>
                    <th scope="row">{this.props.item_num}</th>
                    <td>{this.props.item}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.quantity}</td>
                    <td>Rp.{this.props.price}</td>
                    <td>Rp.{this.props.quantity * this.props.price}</td>
                    <td><button type="button" className="btn btn-secondary btn-sm" onClick={this.props.onRemovess}>Remove</button></td>
                </tr>



            </React.Fragment>
        )
    }
}