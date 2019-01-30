import React, { Component } from 'react';
import Cart from './Carts';
class ModalCart extends Component {
    render() {
        return (
            <div className="modal fade bd-example-modal-lg" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Shopping Cart</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Cart
                                cart={this.props.thecart}
                                onRemoves={this.props.onRemoves}
                                checkiOut={this.props.checkiOut}
                                tot={this.props.total}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalCart;