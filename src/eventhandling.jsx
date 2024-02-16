import React from "react";

function Kavya() {
    function abc(e) {
        console.log("Hai");
    }
    return (
        <button onClick={(event)=>{abc(event)}}>click to see alert</button>
    )
}
export default Kavya;