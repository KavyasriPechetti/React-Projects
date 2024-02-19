import React from "react";

function Counter() {
    const [a,setA]=React.useState(0);

    function inc() {
        setA(a+1);
    }

    function dec() {
        setA(a-1);
    }
    return (
        <div>
            <h1>Counter:{a}</h1>
            <button onClick={()=>{inc()}}>Inc</button>
            <button onClick={()=>{dec()}}>Dec</button>

        </div>
    )
}
export default Counter;