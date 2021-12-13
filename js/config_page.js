function initiate(config) {
    const form = document.getElementById('form');
    data.forEach((x) => {
        form.appendChild(createRow(x, config));
    });

    Object.keys(raidBosses).forEach((wing) => {
        let formfield = document.createElement('fieldset');
        let legend = document.createElement('legend');
        legend.textContent = `Wing ${wing}`;
        formfield.appendChild(legend);

        raidBosses[wing].forEach((boss) => {
            formfield.appendChild(createRow(boss, config));
        })
        form.appendChild(formfield);
    })

    let submit = document.createElement('button');
    submit.id = "save";
    submit.type = "button";
    submit.className = "btn btn-dark";
    submit.textContent = "Save";
    form.appendChild(submit);
    submit.addEventListener('click', save_options);    
}

// Saves options to chrome.storage
function save_options() {
    console.log("save")
    var elements = document.getElementById("form").elements;
    var obj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        obj[item.name] = item.checked;
    }

    chrome.runtime.sendMessage(
        {messageType: 'save-config', config: obj}
    );    
}



// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.runtime.sendMessage(
        {messageType: 'get-config'},
        function ({config}) {
            initiate(config);
        }
    );
}
document.addEventListener('DOMContentLoaded', restore_options);

function createRow(x, config) {
    let label = document.createElement('label');
    let input = document.createElement('input');
    label.classList.add('form-check-label');
    const icon = document.createElement('img');
    icon.src = x.iconUrl;
    icon.classList = 'icon';
    input.name = x.id;
    input.id = x.id;
    input.classList.add('form-check-input');
    input.type = "checkbox";
    if (config[x.id]) {
        input.checked = config[x.id];
    }
    label.textContent = x.name;
    label.insertBefore(icon, label.firstChild);
    label.append(input);
    return label;
}