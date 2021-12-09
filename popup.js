let test;

const interval = setInterval(() => {
    test = document.getElementById('dps-table');
    console.log(interval, test);
    if (test) {
        clearInterval(interval);
        init();
    }
}, 100);

formatter = new Intl.NumberFormat(navigator.language);

const iconUrls = {
    li: 'https://killproof.me/static/images/icon-li.png',
    ld: 'https://killproof.me/static/images/icon-ld.png',
    ufe: 'https://killproof.me/static/images/icon-ufe.png',
    kp: ''
}

function init() {
    const players = document.getElementsByClassName('player-cell');
    console.log(players);
    for (const player of players) {
        console.log(player);
        const attribute = 'data-original-title';
        const accountNameTag = player.querySelector('.player-cell-shorten')
        const accountName = accountNameTag.dataset.originalTitle;
        console.log(accountName);
        chrome.runtime.sendMessage( //goes to bg_page.js
            `https://killproof.me/api/kp/${accountName}?lang=en`,
            (data) => {
                let li = ld = ufe = '-'
                if (!!data.killproofs) {
                    ufe = 0;
                    data.killproofs.forEach(helpKp => {
                        switch (helpKp.id) {
                            case 77302: li = helpKp.amount; break;
                            case 88485: ld = helpKp.amount; break;
                            case 94020: ufe += helpKp.amount; break;
                            case 81743: ufe += helpKp.amount; break;
                        }
                    });
                    li = formatter.format(li);
                    ld = formatter.format(ld);
                    ufe = formatter.format(ufe);
                }
                console.log(player, accountName, data);
                const link = document.createElement('a');
                link.href = data.proof_url;
                link.textContent = accountNameTag.textContent;
                link.target = '_blank';
                accountNameTag.lastChild.remove();
                accountNameTag.appendChild(link);
                player.appendChild(createKpRow(li, iconUrls.li));
                player.appendChild(createKpRow(ld, iconUrls.ld));
                player.appendChild(createKpRow(ufe, iconUrls.ufe));
            }
        );
    }
}

function createKpRow(value, iconUrl) {
    const icon = document.createElement('img');
    icon.src = iconUrl;
    icon.classList = 'icon';
    const text = document.createElement('span');
    text.textContent = value;
    const row = document.createElement('div');
    row.classList = 'kp-row'
    row.appendChild(icon);
    row.appendChild(text);
    return row;
}