import React, { useState } from 'react';
import FoodItem from '../FoodItem/FoodItem';
import './Foods.css';
import fakeData from '../../fakeData/fakeData';
import { Link } from 'react-router-dom';


const Foods = () => {
    const data = fakeData;
    const defult = data.filter(food=>food.category==="breakfast");
    const [foods, setFoods] = useState(defult)
    const handleClick = (name)=>{
        const filterData=[];
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if(element.category == name){
                filterData.push(element)
            }
        }
        setFoods(filterData)
    }
    return (
        <div className="foods">
            <div className="food-nav">
                <button onClick={()=>handleClick("breakfast")}>Breakfast</button>
                <button onClick={()=>handleClick("lunch")}>Lunch</button>
                <button onClick={()=>handleClick("dinner")}>Dinner</button>
            </div>
            <div className="FoodItem-component">
            {
                foods.map(food => <FoodItem key={food.id} food={food}></FoodItem>)
            }
            </div>
            <div className="checkoutFood">
                <Link to="/cart">
                    <button disabled = {!localStorage.length} className="checkoutFoodBtn">Checkout Your Food</button>
                </Link>
            </div>
        </div>
    );
};

export default Foods;