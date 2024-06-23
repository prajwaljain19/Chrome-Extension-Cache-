

chrome.runtime.onmessage.addListener((message, sender, senderRes) => {
    if(message.action == 'ClearCache') {
        const appUrl = message.appUrl;
        ClearAppCache(appUrl);
    }
});  

const ClearAppCache = (appUrl) => {
    chrome.browsingData.remove({
        origin: [appUrl]
    }, {
        cache: true,
    }, () => {
        console.log(`cache cleared {$appUrl}`);
    }
)
}
