// We will have multiple reducers so here we combine all those reducers.
import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProductsReducer,
});
export default reducers;