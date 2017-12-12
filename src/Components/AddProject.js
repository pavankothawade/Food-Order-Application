import React, { Component } from 'react';
import CartItems from './CartItems';

class AddProject extends Component {

    constructor() {
        super();
        this.state={
            cartItems:[]
        }
    }

    componentWillMount() {
        this.setState({cartItems: this.props.cartItems});
        //   console.log({this.state.cartItems});
    }

    deleteProject(id){
        this.props.onDelete(id);

    }

    componentWillReceiveProps() {
        console.log("Component will recieve props");
        this.setState({cartItems: this.props.cartItems});
    }

    /* handleAdd(id)
     {
         this.props.addToCartHandler(id);
     }

 */

    render() {
        //  let addToCartHandler = this.props.addToCartHandler;
        let total = 0

        for(var i = 0; i < this.state.cartItems.length; i++) {
                total += this.state.cartItems[i].Cost * this.state.cartItems[i].count;
        }



                console.log(this.state.cartItems);
        this.state.cartItems = this.state.cartItems.map((cart) => {

            return <CartItems onDelete={this.deleteProject.bind(this)} key={cart.title} cart={cart}/>

        });
        return (
            <table>
                <tbody>
                <tr>
                    <th>Order</th>
                   
                </tr>
                <tr>
                    <td> {this.state.cartItems}</td>
                </tr>
                <tr>
                <td>Total : ${total}</td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default AddProject;