import React from "react";
import {connect } from 'react-redux';

function Counter(props) {
    console.log(props)

    function inc() {
        props.dispatch({type:"INC"})
    }

    function dec() {
        props.dispatch({type:"DEC"})
    }

    function reset() {
        props.dispatch({type:"RESET"})
    }
    return (
        <div className="betterview">
            <h1>Count:{props.counter.count}</h1>
            <button onClick={inc}>Inc</button>&nbsp;&nbsp;&nbsp;
            <button onClick={dec}>Dec</button>&nbsp;&nbsp;&nbsp;
            <button onClick={reset}>Reset</button>&nbsp;&nbsp;&nbsp;
        </div>
        
    )
}

export default connect(store=>store)(Counter);