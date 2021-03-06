import React from "react";
import './CheckoutProduct.css'
import { UseStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, title, image, price, rating }) => {

    const [{ }, dispatch] = UseStateValue()

    const removeFromCart = () => {
        // remove item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}
                </p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                </div>
                <button onClick={removeFromCart}>Remove From cart</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;
