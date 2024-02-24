import React from "react";

function Counter() {
    let [count,setCount]=React.useState(0);

    function incCount() {
        setCount(count+1);
    }

    function decCount() {
        setCount(count-1);
    }
    return (
        <>
        <h1>Counter</h1>
         <span>{count}</span>
         <button onClick={incCount}>Inc</button>
         <button onClick={decCount}>Dec</button>
        </>
      
    )
}

export default Counter;