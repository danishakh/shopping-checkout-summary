import { combineReducers } from "redux";
import promoCodeReducer from './promoCodeReducer';
import cartItemReducer from './cartItemReducer';

export default combineReducers({
    promoCode: promoCodeReducer,
    cart: cartItemReducer
});