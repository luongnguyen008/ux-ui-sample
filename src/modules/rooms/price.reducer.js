import { uniqueId } from "lodash"
let initState = {
    price: []
}
const priceReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_ALL_PRICE':
            return {
                ...state,
                price: action.payload,
            }

        case 'ADD_PRICE':
            return {
                ...state,
                price: [...state.price, action.payload],
            }

        case 'EDIT_PRICE':
            const updatedPrice = action.payload;

            const updatedPrices = state.price.map((price) => {
                if (price.id === updatedPrice.id) {
                    return updatedPrices;
                }
                return price;
            });

            return {
                ...state,
                price: updatedPrice,
            };

        case 'DELETE_PRICE':
            return {
                ...state,
                price: state.price.filter(
                    (p) => p.id !== action.payload
                ),
            };

        default:
            return state
    }
}

export default priceReducer