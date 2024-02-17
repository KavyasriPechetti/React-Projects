import React from "react";
import axios from "axios";

function Dict() {
    const [wordsdata, setWordsdata] = React.useState([]);
    const [word, setWord] = React.useState("");
    const [error, setError] = React.useState("");
    function startSearch() {
        document.getElementById("inp").value = "";
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((response) => {
            setWordsdata(response.data);
            console.log(response.data);
            setError("");
        }).catch((error) => {
            console.log("Cannot get the information", error);
            setError("The word you entered is not in the dictionary");
            setWordsdata("");
        })
    }

    function abc(e) {
        setWord(e.target.value);
    }

    return (
        <div className="main">
            <div className="d1">
                <div>
                    <h1 style={{fontFamily:"arial"}}>Your Dictionary</h1>
                    <div >
                        <input type="text" placeholder="Enter the word" id="inp" style={{ margin: "20px" }} onChange={(e) => {
                            abc(e)
                        }} />
                        <button onClick={startSearch}>Search</button>
                    </div>

                </div>
            </div>

            <div className="out">
                {error && <h4 style={{fontFamily:"arial"}}>{error}</h4>}
                <div >
                    {wordsdata.length > 0 && (
                        <div className="result">
                            <h2 style={{fontFamily:"arial"}}>
                                {wordsdata[0].word}{" "}
                            </h2>

                            {wordsdata[0].meanings[0].synonyms && (
                                <div>
                                    <h3 style={{fontFamily:"arial"}}>Synonyms : </h3>
                                    <p className="para">{wordsdata[0].meanings[0].synonyms.join(',')}</p>
                                </div>
                            )}
                            {
                                wordsdata[0].meanings && (
                                    <div>
                                        <h3 style={{fontFamily:"arial"}}>Parts of speech:</h3>
                                        <p className="para">{wordsdata[0].meanings[0].partOfSpeech}</p>
                                        <h3 style={{fontFamily:"arial"}}>Definition: </h3>
                                        <p className="para">{wordsdata[0].meanings[0].definitions[0].definition}</p>
                                        {wordsdata[0].meanings[0].definitions[0].example && (
                                            <div>
                                                <h3 style={{fontFamily:"arial"}}>Example: </h3>
                                                <p className="para">{wordsdata[0].meanings[0].definitions[0].example}</p>
                                            </div>
                                        )}
                                    </div>
                                )
                            }


                        </div>

                    )}
                </div>

            </div>
        </div>







    )
}

export default Dict;