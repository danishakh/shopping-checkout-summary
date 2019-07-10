import { GET_CART_ITEMS } from './types';
import cartItems from '../cartItems';

// reading cart items from hardcoded object
export const getCartItems= () => dispatch => {
    
    let items = cartItems;

    dispatch({
        type: GET_CART_ITEMS,
        payload: items
    });
};