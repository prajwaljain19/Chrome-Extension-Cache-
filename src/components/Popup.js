import React from "react";
import { useState } from "react";
window.chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'clearCache') {
      const appUrl = message.appUrl;
      clearAppCache(appUrl);
    }
  });
  
  function clearAppCache(appUrl) {
    window.chrome.browsingData.remove({
      origins: [appUrl]
    }, {
      cache: true
    }, () => {
       if(window.chrome.runtime.lastError) {
        console.log(`Error clearing cache for ${appUrl}`, window.chrome.runtime.lastError);
       } else {
        console.log(`Cache cleared for ${appUrl}`);
       }
    });
  }
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