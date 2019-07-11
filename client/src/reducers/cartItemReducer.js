import { GET_CART_ITEMS, CALC_TAX_AND_TOTAL } from '../actions/types';

const initialState = {
    cartItems: [],
    pickupSavings: -20.50,
    cartTotals: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CART_ITEMS:
            return {
                ...state,
                cartItems: action.payload
            }
        case CALC_TAX_AND_TOTAL:
            return {
                ...state,
                cartTotals: action.payload
            }
        default: 
            return state;
    }
};