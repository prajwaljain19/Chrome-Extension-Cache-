import React from "react";
import { useState } from "react";

function Popup()  {

    const [appUrl,setappUrl] = useState('');

    const handleClearcache = () => {
       
        if(appUrl) {
            window.chrome.runtime.sendMessage({ action: 'ClearCache', appUrl});
        }
    };
    
    return (
        <div>
            <title>Cache Clear</title>
            <p>Select the application URL for clear: </p>
            <input
            type = "text"
            placeholder = ""
            value = {appUrl}
            onChange={(e) => setappUrl(e.target.value)
            }
            /> 
           <div style={{padding: '10px'}}>
           <button type="radio" onClick={handleClearcache}>Clear Cache</button>
            </div> 
            
        </div>
    )
}
export default Popup;