import {allproducts} from "./productsdata"
const initialState={
    products:[...allproducts.products],
    cart:[]
}

function productReducer(state=initialState,action) {
    if(action.type==="ADDTOCART") {
        
        const currentIndex = state.cart.findIndex(item => item.id === action.payload.id);
        if(currentIndex!==-1) {
            const updatedCart=[...state.cart];
            updatedCart[currentIndex].quantity++;
            return {...state,cart:updatedCart}
        } else{
            return {...state,cart:[...state.cart,{...action.payload,quantity:1}]}
        }
    }
    return state;
}

export default productReducer;