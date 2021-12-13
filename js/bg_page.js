chrome.runtime.onMessage.addListener(
    function(options, sender, onSuccess) {        
        console.log(options);
        switch(options.messageType) {
            case 'get-config' : {
                chrome.storage.sync.get(['config'], function (config) {
                    console.log(config);
                    onSuccess(config)
                });
                break;
            }
            case 'save-config': {
                chrome.storage.sync.set({config: options.config}, function() {
                    console.log('config has been set', options.config);
                });
                break;
            }
            case 'get-kp': {                
                fetch(options.url)
                    .then(response => response.json())
                    .then(responseText => onSuccess(responseText));
                break;
            }
            default: {
                console.log(options)
            }
        }
        return true;  // Will respond asynchronously.
    }
);