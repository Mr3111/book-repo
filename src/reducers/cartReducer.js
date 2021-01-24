const _ = require('lodash');

const emptyCart = {
    items: [],
    totalPrice: 0
}
const initialState = JSON.parse(localStorage.getItem('cart')) || emptyCart

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const items = [...state.items]
            items.push(action.payload)
            const totalPrice = (parseFloat(state.totalPrice) + parseFloat(action.payload.price)).toFixed(2)
            const newState = {...state, items, totalPrice}
            localStorage.setItem('cart', JSON.stringify(newState))
            return newState;
        }
        case 'DELETE_ITEM': {
            const item = _.find(state.items, {id: action.payload.id});
            const items = state.items.filter(item=> item.id!==action.payload.id);

            const totalPrice = (parseFloat(state.totalPrice) - parseFloat(item.price)).toFixed(2)
            const newState = {...state, items, totalPrice}
            localStorage.setItem('cart', JSON.stringify(newState))
            return newState;
        }
        case 'CLEAR_CART': {
            localStorage.setItem('cart', JSON.stringify(emptyCart))
            return emptyCart;
        }
        default: {
            return state
        }
    }
}

export default CartReducer;
