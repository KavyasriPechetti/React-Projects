import React from "react";

function Cart() {
    const [count,setCount]=React.useState(0);
    const [prevCount, setPrevCount] = React.useState(0);
    

    const incrementByTen = () => {
        if (count < 500) {
            setPrevCount(count); 
            setCount(count + 10);
        }
    };

    const clearCount = () => {
        setCount();
    };

    const restorePrevCount = () => {
        setCount(prevCount);
    };

   const increment=()=>{
    setCount(count+1);
   }

   const decrement=()=>{
    setCount(count-1);
   }
    return (
        <div className="cou">
        <div>
            <div>
            <button onClick={increment}>+</button> &nbsp;
           <span>Count:{count}</span>&nbsp;
           <button onClick={decrement}>-</button>
            </div><br/><br/>
           
            <button onClick={restorePrevCount}>Prev</button>&nbsp;&nbsp;&nbsp;
            <button onClick={incrementByTen}>Inc By 10</button>&nbsp;&nbsp;&nbsp;
            <button onClick={clearCount}>Clear</button>&nbsp;&nbsp;&nbsp;
        </div>
        </div>
    )
}

export default Cart;