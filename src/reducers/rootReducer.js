import {combineReducers} from "redux";
import CartReducer from "./cartReducer";
import BookReducer from "./bookReducer";

const rootReducer = combineReducers({
    cart: CartReducer,
    book: BookReducer
})

export default rootReducer;


