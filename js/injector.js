let test;
let config;

chrome.storage.sync.get(['config'], function (data) {
    config = data.config;
    init();
});

chrome.runtime.onMessage.addListener(
    function (options, sender, onSuccess) {
        if (options.messageType === 'config-updated') {
            config = options.config;
            init();
        }
    });

const interval = setInterval(() => {
    test = document.getElementById('dps-table');
    if (test) {
        clearInterval(interval);
        init();
    }
}, 100);

formatter = new Intl.NumberFormat(navigator.language);

function init() {
    const players = document.getElementsByClassName('player-cell');
    for (const player of players) {
        const attribute = 'data-original-title';
        const accountNameTag = player.querySelector('.player-cell-shorten')
        const accountName = accountNameTag.dataset.originalTitle;
        chrome.runtime.sendMessage( //goes to bg_page.js
            { messageType: 'get-kp', url: `https://killproof.me/api/kp/${accountName}?lang=en` },
            (data) => {
                if (config) {
                    let seeable = [];
                    justAllIds.forEach((x) => {
                        if(config[x.id]) {
                            seeable.push(x);
                        }
                    })
                    // Object.entries(config).forEach(([key, value]) => {
                    //     if (value) {
                    //         seeable.push(justAllIds.find((x) => x.id == key));
                    //     }
                    // });
                    if (data.error) {
                        seeable.forEach((x) => {
                            x.amount = '';
                            player.appendChild(createKpRow(x));
                        });
                    } else {
                        seeable.forEach((x) => {
                            let item = data[x.key[0]].find((kp) => kp.id == x.id);
                            if (item) {
                                x.amount = formatter.format(item.amount);
                            } else {
                                x.amount = '-'
                            }
                        });
                        const link = document.createElement('a');
                        link.href = data.proof_url;
                        link.textContent = accountNameTag.textContent;
                        link.target = '_blank';
                        accountNameTag.lastChild.remove();
                        accountNameTag.appendChild(link);
                        seeable.forEach((x) => {
                            player.appendChild(createKpRow(x));
                        });
                    }

                    // let li = ld = ufe = '-'
                    // if (!!data.killproofs) {
                    //     ufe = 0;
                    //     data.killproofs.forEach(helpKp => {
                    //         switch (helpKp.id) {
                    //             case 77302: li = helpKp.amount; break;
                    //             case 88485: ld = helpKp.amount; break;
                    //             case 94020: ufe += helpKp.amount; break;
                    //             case 81743: ufe += helpKp.amount; break;
                    //         }
                    //     });
                    //     li = formatter.format(li);
                    //     ld = formatter.format(ld);
                    //     ufe = formatter.format(ufe);
                    // }
                    // console.log(player, accountName, data);                    
                }
            }
        );
    }
}

function createKpRow(value) {
    const icon = document.createElement('img');
    icon.src = value.iconUrl;
    icon.alt = value.name;
    icon.classList = 'icon';
    const text = document.createElement('span');
    text.textContent = value.amount;
    const row = document.createElement('div');
    row.classList = 'kp-row'
    row.appendChild(icon);
    row.appendChild(text);
    return row;
}