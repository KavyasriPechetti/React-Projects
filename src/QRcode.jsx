import React from "react";
import QRCode from "qrcode.react";

function QrCode() {
    const [text,setText]=React.useState("");
    const [qrcodeUrl,setQrcodeUrl]=React.useState("");

    const handleChange=(event) =>{
        setText(event.target.value);
    }

    const generateQrcode=()=> {
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=200x200`;
        setQrcodeUrl(qrCodeUrl);
    }
    return (
        
        <div>
       
        <div className="main">
            <h1>QR Code Generator</h1>
            <div className="inp">
                <input type="text" placeholder="Enter the text" id="i" onChange={handleChange} value={text}/><br></br><br></br>
                <button className="btn btn-info" id="btn" onClick={generateQrcode}>Generate QR Code</button>
            </div>
            
        </div>
        <div id="qr">
            {qrcodeUrl&&
            <img id="im" src={qrcodeUrl}/>
            }
        </div>
        </div>
        
       
    )
}

export default QrCode;