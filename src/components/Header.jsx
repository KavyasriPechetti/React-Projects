import React from "react";
import { connect } from "react-redux";

function Header(props) {
    return(
        <div className="head" >
            <h1>Edupoly collection</h1>
            <h1>Cart:{props.products.cart.length}</h1>
        </div>
    )
}
export default connect(store=>store) (Header);