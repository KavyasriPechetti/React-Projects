import React from "react";
import { connect } from "react-redux";


function Cart(props) {
    
    console.log(props);
    const total = props.products.cart.reduce((sum, product) => sum + product.price, 0);

    return (
        <div>
            <div className="heading">
            <h1>Your Cart Items</h1>
            </div>
            
            <div >
                <div className="cart">
                    {
                         (props.products.cart.length) ?                    
                    (
                        props.products.cart.map((product) => {
                            return (
                                
                                     <div className="cartdiv" key={product.id}>
                                        
                                        <img src={product.images[0]} />
                                        <h4>{product.title}</h4>
                                        <p>{product.description}</p>
                                        <h5 id="price">${product.price}</h5>

                                </div>
                               
                           
                               
                            )
                        })
                        
                    ):
                    (<div className="empty">
                        <img src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg"/>
                     <h2>Your Cart is empty...</h2>
                    </div>)
                   
                }
                
                </div>


            </div>
            <div className="tot">
                <h1>Total:${total}</h1>
            </div>

        </div>
    )
}

export default connect(store => store)(Cart);