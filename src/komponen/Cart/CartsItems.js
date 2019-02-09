import React, { Component } from 'react'
export default class Carts extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         itemPurches: [{
    //             img: props.item,
    //             id: props.id,
    //             nama: props.name,
    //             quantity: props.quantity,
    //             price: props.price,
    //             total: props.quantity * props.price
    //         }]
    //         // total: this.state.quantity * this.state.price
    //     }

    // }
    render() {
        return (
            <React.Fragment>
                {/* {console.log(this.state.total)} */}
                <tr>
                    <th scope="row">{this.props.item_num}</th>
                    <td><img style={{ maxWidth: '50px', maxHeight: '60px' }} src={`/assets/img/${this.props.item}`} alt="" /></td>
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