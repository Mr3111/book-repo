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
        // case 'DELETE_ITEM': {
        //     const items = [...state.items]
        //     items.splice(action.payload.index, 1)
        //     const totalPrice = (parseFloat(state.totalPrice) - parseFloat(action.payload.price)).toFixed(2)
        //     return {...state, items, totalPrice};
        // }
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
