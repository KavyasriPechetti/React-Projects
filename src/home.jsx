import React from "react";
import Products from "./products";

function Home() {
    return (
        <div className="hero">
            <div className="card text-bg-dark border-0">
                <img src="https://i.pinimg.com/736x/fc/2b/4e/fc2b4e1a186939c34959ed3845dd985b.jpg" className="card-img" alt="Background" height="600px"/>
                <div className="card-img-overlay">
                    <div className="container">
                    <h5 className="card-title display-2 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2">Check out the new arrivals.</p>
                    </div>

                    
                </div>
            </div>
            <Products></Products>
        </div>
    )
}
export default Home;