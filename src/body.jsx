import React from "react";

function Body() {
    var [ar, setAr] = React.useState([]);
    function add() {
        var newar = document.getElementById("inp").value;
        setAr([...ar, {name:newar, checked:false}]);
        document.getElementById("inp").value = "";

    }
    function del(i) {
        var updatedar = [...ar];
        updatedar.splice(i, 1);
        setAr(updatedar);
    }
    function done(i) {

        const updatedar = [...ar];
        updatedar[i].checked = !updatedar[i].checked;
        setAr(updatedar);
    }

    return (

        <div className="textbox">
            <input type="text" id="inp" placeholder="Enter your task" />
            <button id="btn" onClick={add}>Add</button>
            <div className="divi">
                <ul>
                    <div >
                        {ar.map((a, i) => {
                            return (
                                <div className="lidiv">
                                    <span id="doneid">{
                                        a.checked ? (<i class="bi bi-check-square-fill"></i>) : (<i class="bi bi-check-square"></i>)
                                    }</span>
                                    <li className="lis"><b id="h">{a.name}</b></li>
                                    <button id="b" onClick={() => { done(i) }}>{a.checked?"undo":"done"}</button>
                                    <b id="bold">{a.checked?"Completed":"Pending"}</b>
                                    <span id="s" onClick={() => del(i)}><i class="bi bi-trash3-fill"></i></span>



                                </div>

                            )
                        })
                        }
                    </div>
                </ul>
            </div>
        </div>
    )
}
export default Body;