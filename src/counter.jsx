import React from "react";

function Counter() {
    var [a,setA]=React.useState(0);
    function inc() {
        setA(a+1);
    }
    function dec() {
        setA(a-1);
    }
    return (
        <div>
        <h1>counter :{a}</h1>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
        </div>
    )
}
export default Counter;