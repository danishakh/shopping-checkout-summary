import { GET_CART_ITEMS, CALC_TAX_AND_TOTAL } from './types';
import cartItems from '../cartItems';

// reading cart items from hardcoded object
export const getCartItems = (callback) => dispatch => {
    
    let items = cartItems;

    dispatch({
        type: GET_CART_ITEMS,
        payload: items
    });
};

export const calcTaxAndTotal = () => dispatch => {

    // calculate itemTotal price of all items in the cart
    const itemTotal = (cartItems.map(item => item.price).reduce((accumulator, current) => {
        return accumulator + current;
    }, 0)).toFixed(2);

    // calculate tax
    const tax = Number(itemTotal * 0.09).toFixed(2);

    // calculate cart Total
    // REMEMBER TO SUBTRACT PICKUP SAVINGS IN COMPONENT
    const finalTotal = (Number(itemTotal) + Number(tax)).toFixed(2);

    const cartTotals = {itemTotal, tax, finalTotal}
    console.log(itemTotal);
    dispatch({
        type: CALC_TAX_AND_TOTAL,
        payload: cartTotals
    })
    
}