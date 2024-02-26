import React from "react";
import Skeleton from "react-loading-skeleton";

function Products() {

    const [data, setData] = React.useState([]);
    const [filtered, setFiltered] = React.useState(data);
    const [loading, setLoading] = React.useState(false);
    let componentMounted = true;

    React.useEffect(() => {
        const getProducts=async()=> {
            setLoading(true);
            const response=await fetch("https://fakestoreapi.com/products");
            if(componentMounted) {
                setData(await response.clone().json());
                setFiltered(await response.json());
                setLoading(false);
                console.log(filtered);
            }
            return ()=> {
                componentMounted=false;
            }
        }
        getProducts();
     }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350}></Skeleton>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}></Skeleton>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}></Skeleton>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}></Skeleton>
                </div>
            </>
        )
    }

    const filteredProducts=(type)=> {
        const updatedProducts=data.filter((x)=> x.category===type);
            setFiltered(updatedProducts);
        
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="button d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-3" onClick={()=>setFiltered(data)}>All</button>
                    <button className="btn btn-outline-dark me-3" onClick={()=>filteredProducts("men's clothing")}>Men's</button>
                    <button className="btn btn-outline-dark me-3" onClick={()=>filteredProducts("women's clothing")}>Women's</button>
                    <button className="btn btn-outline-dark me-3"onClick={()=>filteredProducts("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark"onClick={()=>filteredProducts("electronics")}>Electronics</button>
                </div>
                {filtered.length && filtered.map((product) => {
                    return (
                        
                            <div  className="col-md-3 mb-4 ">
                                <div id="p"className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} className="card-img-top" alt={product.title} height="230px"/>
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                            <p className="card-text lead fw-bold">${product.price}</p>
                                            <a href="#" className="btn btn-outline-dark">Buy Now</a>
                                        </div>
                              </div>
                            </div>
                   )
                })}
            </>

        );

    }


    return (
        <div>
            <div className="container my-3 py-3">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Collection</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading></Loading> : <ShowProducts></ShowProducts>}

                </div>
            </div>
        </div>
    )
}

export default Products;