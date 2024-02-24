import React from "react";

function Products() {

    const [data, setData] = React.useState([]);
    const [filtered, setFiltered] = React.useState(data);
    const [loading, setLoading] = React.useState(false);
    let componentMounted = true;

    React.useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://dummyjson.com/products");
            if (componentMounted) {
                const products=await response.json();
                setData(products);
                setFiltered(products);
                setLoading(false);
                // console.log(filtered);
            }
            
        };
        getProducts();
        return () => {
            componentMounted = false;
        };
       
    }, [])

    const Loading = () => {
        return (
            <>
                Loading.........
            </>
        )
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="button d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-3">All</button>
                    <button className="btn btn-outline-dark me-3">Men's Collection</button>
                    <button className="btn btn-outline-dark me-3">Women's Collection</button>
                    <button className="btn btn-outline-dark me-3">Jewelery</button>
                    <button className="btn btn-outline-dark">Electronics</button>
                </div>
                {filtered.map((product) => {
                    return (
                        
                            <div className="col-md-3">
                                <div className="card">
                                    <img src={product.image} className="card-img-top" alt={product.title}/>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">${product.price}</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
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