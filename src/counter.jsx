import React from "react";

function Counter() {
    const [count,setCount]=React.useState(0);

    function inc() {
        setCount(count+1);
    }

    function dec() {
        setCount(count-1);
    }

    console.log("Hai");
    return (
         <div className="mybox">
            <h1>Counter:{count}</h1>
            <button onClick={()=>{inc()}}>Increment</button>
            <button onClick={()=>{dec()}}>Decrement</button>

         </div>
    )
}
export default Counter;