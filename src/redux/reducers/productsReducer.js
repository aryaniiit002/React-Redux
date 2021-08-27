// Here we will create the reducer and reducer always take the inital state and the action 
import { ActionTypes } from "../constants/action-types";
const intialState = {
    products: [{
        id: 1,
        title: "Aryan",
        category: "programmer"
    }],
};

// Reducer - productsReducer
export const productsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload };
        default:
            return state;
    }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};