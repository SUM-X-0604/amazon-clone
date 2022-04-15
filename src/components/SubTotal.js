import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { UseStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function SubTotal() {

    const [{ basket }, dispatch] = UseStateValue();

    return (
        <div className='subtotal'>
            {/* price */}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            subtotal ({basket.length} items) :
                            <strong>
                                {value}
                            </strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox" />
                            This order containes gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₹'}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default SubTotal