import React from "react";

function ProductsCart({cartItem}) {
    return (
        <div>
            <h2>Products Cart</h2>
            <ol>
                {
                    cartItem?.map((item)=>{return(
                        <li><img  style={{height:"50px",width:"50px"}} src={item.image}/><br/>
                            
                            ${item.price}<br/>
                            {item.category}<br/>
                            quantity:{item.quantity}
                        </li>
                        
                    )})
                }
            </ol>
            {
                cartItem.length==0 &&<h4>Your cart is empty</h4>
            }
        </div>
    )
}
export default ProductsCart;