import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import './FoodDetails.css';

const FoodDetails = () => {
    const [food, setFood] = useState({});
    const data = fakeData;
    const {id} = useParams();
    useEffect(()=>{
        const updateFood = data.find(food =>food.id === id);
        setFood(updateFood);
    },[]);
    const handleAddToDatabase = () =>{
        //debugger;
        console.log(localStorage);
        if (localStorage.length > 0) {
            const oldItem = localStorage.getItem("id");
            console.log(oldItem);
            const parseOldItem = JSON.parse(oldItem);
            console.log(parseOldItem);
            localStorage.setItem("id",`[${parseOldItem},${food.id}]`);
        }
        else{
            localStorage.setItem("id",`[${food.id}]`);
        }
    }
    return (
        <div className="FoodDetails">
            <div className="containt">
                <h1>{food.name}</h1>
                <p>{food.details}Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quas accusantium quisquam, odit tenetur explicabo quam voluptas recusandae </p>
                <h2>${food.price}</h2>
                <button onClick={handleAddToDatabase}>Add</button>
            </div>
            <div className="img">
                <img src={food.img} alt=""/>
            </div>
        </div>
    );
};

export default FoodDetails;