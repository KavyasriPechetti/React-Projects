import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Products(props) {
    function isInCart(product) {
        var x=props.products.cart.find((p)=>{
            if(p.id===product.id) {
                return true
            }
        })
        return x;

    }
    return (
        <div>

       
        <div className="head">
        <h1>Edupoly collection</h1>
        <Link to="/cart"><h1> Cart:{props.products.cart.length}</h1></Link>
      

    </div>
        <div className="betterview">
            
            <h1>Products</h1>
                    <div className="cardsContainer">
                {
                    props.products.products.map((product)=>{return(
                       
                             <div className="card">
                                <img src={product.images[0]} alt=""/>
                                <h5> Title: {product.title.slice(0,15)}....</h5>
                                <h5>Price:${product.price}</h5>
                                {!isInCart(product) &&<button onClick={()=>{props.dispatch({type:"ADDTOCART",payload:product})}}>Add to Cart</button>}
                                {isInCart(product) &&<Link to="/cart"><button>Go to Cart</button></Link>}
                            </div>                         
                    )})
                }
                 </div>
            
        </div>
        </div>
    )
}

export default connect(store=>store) (Products);