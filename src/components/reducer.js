export const InitialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => amount + item.price, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            // LOGIC FOR ADDING ITEM INTO CART
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        case 'REMOVE_FROM_BASKET':
            // LOGIC FROM REMOVING ITEM FROM CART
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            let newBasket = [...state.basket];
            if (index >= 0) {
                // remove items from cart
                newBasket.splice(index, 1);

            } else {
                console.warn(`can't remove the product (id: ${action.id} as its not in the cart)`)
            }

            return { ...state, basket: newBasket };
        default:
            return state;
    }
}

export default reducer;
