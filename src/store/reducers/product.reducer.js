import {allproducts} from "./productsdata"
const initialState={
    products:[...allproducts.products],
    cart:[]
}

function productReducer(state=initialState,action) {
    if(action.type==="ADDTOCART") {
        
        return {...state,cart:[...state.cart,{...action.payload}]}
    }
    return state;
}

export default productReducer;