import { GET_CART_ITEMS } from '../actions/types';

const initialState = {
    cartItems: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CART_ITEMS:
            return {
                ...state,
                cartItems: action.payload
            }
        default: 
            return state;
    }
};