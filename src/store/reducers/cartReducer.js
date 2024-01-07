import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems: cartItems
}

export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            let car = state.cartItems.find(c => c.car.id === payload.id)
            if (car) {
                car.quantity++;
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { quantity: 1, car: payload }]
                }
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(c => c.car.id !== payload.id)
            };
        default:
            return state;
    }
}