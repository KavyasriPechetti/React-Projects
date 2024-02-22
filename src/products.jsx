import React from "react";
import axios from "axios";
import { BiCart } from "react-icons/bi";
import ProductsCart from "./productsCart";
function Products(){
    const [products,setProducts]=React.useState([]);
    let [cartItem,setCartItem]=React.useState([]);
    React.useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setProducts([...res.data]);
            // console.log(res.data)
        })
    },[])
    function addToCart(product) {
        const updatedCart=[...cartItem];
        const currentIndex=updatedCart.findIndex(item=>item.id==product.id);
        if(currentIndex!==-1) {
            updatedCart[currentIndex].quantity++;
        } else {
            product.quantity=1;
            updatedCart.push(product);
        }
        
        setCartItem(updatedCart);
        
        console.log(product)
        

    }
    React.useEffect(()=>{
        // console.log(products)
    },[products])

    return (
        <div>
            <div className="carticon">
            <b id="title">Products</b>
            <div>
            <div className="container-fluid d-flex justify-content-right  ml-2 ">
                <div className="row">
                    <div className="col-12 text-right mt-3">
                        <BiCart style={{ fontSize: "2rem" }} />
                        <span >{cartItem.length}</span>
                    </div>
                </div>
            </div>
            </div>
              
            </div>
             
     
        <div className="first">       
            
            <div className="main">
            {
                products?.map((product)=>{return(
                    <div class="pdiv" style={{width:"300px"}}>
                         <img style={{width:"100px",height:"100px",borderRadius:"50px"}} src={product.image}/>
                         
                           <h5>{product.title}</h5>
                           <div>
                            <p>{product.description.slice(0,100)}</p>
                           <b >${product.price}</b>
                            <p>{product.category}</p>
                            <button class="btn btn-primary" onClick={()=>{addToCart(product)}} >Add to Cart</button>
                            </div> 
                            
                        
                    </div> 
                   
                    
                )})
            }
            </div>
            <div className="cart">
                <ProductsCart cartItem={cartItem}></ProductsCart>
            </div>
            
        </div>
        </div>
    )
}

export default Products;