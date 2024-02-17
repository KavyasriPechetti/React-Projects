import React from "react";
import axios from "axios";

function Dict() {
    const [words, setWords]=React.useState([]);

    React.useEffect(()=>{
        axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/hello").then((res)=>{
            console.log(res.data);
            setWords(res.data);
        })
    }, [])

    return 
}

export default Dict;