import React from "react";

function Counter() {
    const [a, setA] = React.useState(0);
    function inc() {
        setA((a)=> {
            console.log(a);
            document.getElementById("dd").style.display = "block";
            setTimeout(() => {
                document.getElementById("dd").style.display = "none";
            }, 2000);
            return a+1;
        })
        // document.getElementById("dd").style.display="block";   logic should not be written here
    }
    function dec() {
        setA((a)=> {
            console.log(a);
            document.getElementById("de").style.display = "block";
            setTimeout(() => {
                document.getElementById("de").style.display = "none";
            }, 2000);
            return a-1;
        })
       
    }

    React.useEffect(() => {
            console.log("Kavya sri");          //this function is executed only once when the component is loaded first
            document.getElementById("dd").style.display = "none";
            document.getElementById("de").style.display = "none";


        }, []);

        React.useEffect(() => {

        }, [a]);             //when the state variable a is updated, this function will execute

        // function inc10() {
        //     for(var i=1;i<=10;i++) {
        //         setA(a+1);        //here everytime a value is being substituted to 0 but not updating
        //     }                     //so we only get incremented by 1  asynchronous function and 
        // }                        // update ayyelopala next setA execute aeeipothundhi

        function inc10() {
            for(var i=1;i<=10;i++) {
                setA((a)=>{
                    return a+1;
                })
            }
        }

        return (
            <div className="mybox">
                <h1>Counter:{a}</h1>
                <button onClick={() => { inc() }}>Increment</button>
                <button onClick={() => { dec() }}>Decrement</button>
                <button onClick={()=>{inc10()}}>Increment 10 times</button>
                <div id="dd">
                    <h3>Incremented....</h3> 
                </div>
                <div id="de">
                    <h3>Decremented....</h3>
                </div>
            </div>
        )
    }
    export default Counter;