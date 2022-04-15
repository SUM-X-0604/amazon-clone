import React from 'react'
import { UseStateValue } from './StateProvider';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';

const Checkout = () => {
    const [{ basket }] = UseStateValue();

    return (
        <div className="checkout">
            <div className="checkout__Left">
                <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/I/7191qk-xnFL.jpg" alt="ad" />

                {basket?.length === 0 ? (
                    <div>
                        <h2 className='checkout__title'>
                            Your Cart is empty
                        </h2>
                        <p>You have no items in your Cart. To buy one or "Add to Cart" next to the item</p>
                    </div>
                ) : (
                    <div>
                        <h2 className='checkout__title'>
                            Your shopping cart
                        </h2>
                        {/* list of all of the checkout products */}
                        {basket?.map((item) =>
                        (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        )
                        )}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className='checkout__Right'>
                    <h1 className='checkout__RightHeading'>Subtotal</h1>
                    <SubTotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
