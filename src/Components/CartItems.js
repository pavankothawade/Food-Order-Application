import React, { Component } from 'react';


class CartItems extends Component {
    deleteProject(id){

        this.props.onDelete(id);

        // console.log('test');
    }
    handleAdd(id) {

        this.props.addToCartHandler(id);
    }



    render() {
        return (
            <tr>
                <td>{this.props.cart.title}</td>
                <td>{this.props.cart.Cost}</td>
                <td>{this.props.cart.count}</td>
                <td><button onClick={this.deleteProject.bind(this, this.props.cart)}>Remove</button></td>
            </tr>
        );
    }
}

export default CartItems;
