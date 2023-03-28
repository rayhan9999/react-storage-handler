import React from 'react';
import { adToDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;




    const addToCart = (id) => {
        adToDb(id);
    }

    const removeFromCart = id => {
        removeFromDb(id);
    }


    return (
        <div className='product'>

            <h2>Buy this:{name} </h2>
            <p>Only for:${price}</p>
            <p><small>it has id :{id}</small></p>

            <button onClick={() => addToCart(id)}>Add To Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>

        </div>
    );
};

export default Cosmetic;