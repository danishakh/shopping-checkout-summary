import { GET_CART_ITEMS, CALC_TAX_AND_TOTAL, CALC_PROMO_TOTAL } from '../actions/types';

const initialState = {
    cartItems: [],
    pickupSavings: -20.50,
    cartTotals: {},
    promos: {'AKHTAR91': '0.8', 'JULY4': '0.9'}
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
        case CALC_PROMO_TOTAL:
            return {
                ...state,
                promoTotal: action.payload
            }
        default: 
            return state;
    }
};