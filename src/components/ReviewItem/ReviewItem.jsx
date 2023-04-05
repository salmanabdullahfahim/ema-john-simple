import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,handleRemove}) => {

    const {id,img,name,quantity,price} = product
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
               
            </div>
            <button onClick={()=>handleRemove(id)} className='btn-delete'><FontAwesomeIcon className='trash-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;