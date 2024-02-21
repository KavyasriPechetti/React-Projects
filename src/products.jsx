import React from "react";
import axios from "axios";
function Products(){
    const [products,setProducts]=React.useState([]);
    React.useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setProducts([...res.data]);
            console.log(res.data)
        })
    },[])

    return (
        <div>
            <h1>Products</h1>
            <div className="d-flex flex-wrap w-75">
            {
                products?.map((product)=>{return(
                    <div className="card m-2" style={{width:"250px"}}>
                         <img src={product.image}/>
                         <div>
                            <h5>{product.title}</h5>
                            <p>{product.description}</p>
                            <p>{product.category}</p>
                         </div>
                    </div> 
                   
                    
                )})
            }
            </div>
            
            
        </div>
    )
}

export default Products;