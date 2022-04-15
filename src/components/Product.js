import React from "react";
import "./Product.css";
import { UseStateValue } from "./StateProvider";

const Product = ({ id, image, title, price, rating }) => {
    const [{ basket }, dispatch] = UseStateValue();

    const addToBasket = () => {
        // Add item to basket...
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to cart</button>
        </div>
    );
};

export default Product;
