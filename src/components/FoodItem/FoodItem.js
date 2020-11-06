import React from 'react';
import { Link } from 'react-router-dom';
import './FoodItem.css'

const FoodItem = (props) => {
    const {name, img, details, price, id} = props.food;
    return (
        <div className="FoodItem">
            <div className="container">
                <img src={img} alt=""/>
                <Link to={`/food/${id}`}>
                    <h5>{name}</h5>
                </Link>
                <p><small>{details}</small></p>
                <h4>${price}</h4>
            </div>
        </div>
    );
};

export default FoodItem;