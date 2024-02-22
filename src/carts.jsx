import React from "react";
import axios from "axios";


function Cart() {
    const [items, setItems] = React.useState([]);
    const [isLoading, setLoading] = React.useState(true);
    React.useEffect(() => {
        // setLoading(true);
        axios.get("https://dummyjson.com/carts").then((res) => {
            setItems([...res.data.carts[0].products])
            console.log(res.data);
        })
        setLoading(false);
    }, [])

    function inc(item) {
        var temp = [...items];
        temp = temp.map((titem) => {
            if (titem.id == item.id) {
                titem.quantity = titem.quantity + 1;
            }
            return titem;
        })
        setItems([...temp]);
    }

    function dec(item) {
        var temp = [...items];
        temp = temp.map((titem) => {
            if (titem.id == item.id) {
                titem.quantity = titem.quantity - 1;
                if (titem.quantity === 0) {
                    remove(titem);
                }
            }
            return titem;
        })
        setItems([...temp]);
    }

    function remove(item) {
        var temp = [...items];
        temp = temp.filter((ritem) =>
            ritem.id != item.id);

        setItems([...temp]);
    }

    function removeAll() {
        setItems([]);
        document.getElementById("t").innerHTML = "";

    }

    return (
        <div>
            <h1 id="heading">Shopping Cart </h1>
            <button id="rbtn" onClick={() => { removeAll() }}>Remove All</button>
            {
                isLoading && (
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                )
            }

            <div className="main">
                {
                    (items.length == 0 ? (
                        <div>
                            {/* <h2>Your cart is empty....</h2> */}
                            <img style={{marginTop:"0px",height:"500px",width:"700px"}}src={"https://shop.millenniumbooksource.com/static/images/cart1.png"}/>
                        </div>
                        
                        
                    ) : (
                        <ul>
                            {
                                items.map((item) => {
                                    return (




                                        <li className="listItem">
                                            <img src={item.thumbnail} />
                                            <h5>{item.title}</h5>
                                            <i>${item.price}</i>
                                            <button onClick={() => { inc(item) }} class="btn btn-success">+</button>
                                            <b>{item.quantity}</b>
                                            <button onClick={() => { dec(item) }} class="btn btn-danger">-</button>
                                            <h6>Items Price: $<i>{item.quantity * item.price}</i></h6>
                                            <button id="btn" onClick={() => { remove(item) }}>Remove</button>

                                        </li>




                                    )
                                })
                            }
                            <div class="total">
                                <h3 id="t">Total : ${items?.reduce((sum, item) => {
                                    return sum + (item.quantity * item.price)
                                }, 0)}</h3>
                            </div>

                        </ul>
                    ))
                }


            </div>
        </div>
    )
}

export default Cart;