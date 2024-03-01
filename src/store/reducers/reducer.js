
import productReducer from "./product.reducer";
import cartReducer from "./cart.reducer";
import { combineReducers } from "redux";


var reducer=combineReducers({
    
    products:productReducer,
    cart:cartReducer
    
})

export default reducer;