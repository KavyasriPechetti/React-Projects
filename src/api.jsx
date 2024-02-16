import React from "react";
import axios from "axios";

function Api() {
    const [countries,setCountries]=React.useState([]);
   React.useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all").then((res)=>{
        console.log(res.data);
        setCountries([...res.data]);
    })
   
   },[])
    return (
        <div>
            <h1>List of countries</h1>
            <ul>
            {
                countries.map((a)=>{return 
                    (
                    <li>{a.name.common}-{a.capital}</li>
                   

                )})
            }
            </ul>
           
        </div>
    )
}
export default Api