import React from "react";

function Counter(x) {
    var [a, setA] = React.useState(x.score);
    function inc() {
        setA(+a + (+x.cinc));
    }
    function dec() {
        setA(+a - (+x.cinc));
    }
    return (
        <div className="count">
            <div>
                
            <h1>{x.cname}:{a}</h1>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
                        

            </div>
        </div>

    )
}
export default Counter;