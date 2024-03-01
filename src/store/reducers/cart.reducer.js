
const initialState={
    cart:[]
}

const cartReducer=(state=initialState,action)=>{
        if(action.type==="INCREMENT") {
            return {...state,cart:state.cart.map((item)=>item.id===action.payload?{...item,quantity:item.quantity+1}:item)}
        }

        if(action.type==="DECREMENT") {
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
                )
            }

        }
        return state;
}
export default cartReducer;