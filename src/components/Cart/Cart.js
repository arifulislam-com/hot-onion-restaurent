import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import SelectedItem from '../SelectedItem/SelectedItem';
import './Cart.css';

const Cart = () => {
    const data = fakeData;
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem("id"));
        const selectedData = localStorageData.map(id => {
            const value = data.find(food => food.id == id);
            return value;
        });
        setCart(selectedData);
    },[]);
    const totalPrice = Math.round(cart.reduce((total,item)=>total + item.price,10))
    console.log(totalPrice);
    return (
        <div className="cart">
            <div className="delivaryDetails">
                <h2>Edite Delivary Details</h2>
                <button className="checkoutFoodBtn">Save & Continue</button>
            </div>
            <div className="SIC">
                <p><b>from Gulshan Restura GPR</b></p>
                <p>Arriving in 20-30 min</p>
                <p>107 Rd no 8</p>
                {
                   cart.map(item => <SelectedItem item = {item}></SelectedItem>)
                }
                <p>Subtotal {cart.length} Item</p>
                <p>Tax: $6.00</p>
                <p>Delicary Fee: $4.00 </p>
                <h4>Total: ${totalPrice}</h4>
                <Link to="/placeOrder">
                    <button onClick={() => localStorage.removeItem("id")} className="checkoutFoodBtn">Place Order</button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;