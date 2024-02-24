import React from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
function CountryDetails() {
    let cparams = useParams();
    // console.log(cparams); 

    let [countryDetails,setCountryDetails]=React.useState(null)
    React.useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/name/${cparams.cname}?fullText=true`).then((res)=>{
            // console.log(res.data[0]);
            setCountryDetails(res.data[0]);
        })
    },[cparams])
    return (
       
        <div  className="border border-3 border-info p-3">
           
            {
                countryDetails && 
                <div>
                    <h1>{countryDetails.name.common}</h1>
                    <h2>{countryDetails.capital[0]}</h2>
                    <img  className="h-50 w-50"src={countryDetails.flags.png}/>
                </div>
            }
        </div>
    )
}

export default CountryDetails;