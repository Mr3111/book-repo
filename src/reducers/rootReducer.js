import {combineReducers} from "redux";
import CartReducer from "./cartReducer";

const rootReducer = combineReducers({
    cart: CartReducer,
})

export default rootReducer;


