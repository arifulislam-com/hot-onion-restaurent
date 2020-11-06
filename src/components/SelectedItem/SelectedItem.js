import React from 'react';
import './SelectedItem.css';

const SelectedItem = (props) => {
    const {img, name, price} = props.item;
    return (
        <div className="selectedItem">
            <div className="itemImg">
                <img src={img} alt=""/>
            </div>
            <div className="itemDettails">
                <h6>{name}</h6>
                <h5>{price}</h5>
                <p><small>Delivary tree</small></p>
            </div>
        </div>
    );
};

export default SelectedItem;