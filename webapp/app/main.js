'use-strict';

const config = require('./config.json');
const empty = "&#10240;";

(async () => {
    try {
        buildInformationDiv(); 
        buildExpertiseDiv(); 
        buildWorkHistoryDiv(); 
        buildEducationHistoryDiv();
    }catch(error) {
        console.log(error);
    }
})();

function buildInformationDiv() {
    document.getElementById('name').innerHTML = config.info.name;
    document.getElementById('email').innerHTML = config.info.email;
    document.getElementById('phone').innerHTML = config.info.phone;
    document.getElementById('spec').innerHTML = config.info.spec;
    document.getElementById('desc').innerHTML = config.summary.desc;
}

function buildExpertiseDiv() {
    let div = document.getElementById('exp-summary'); 
    config.summary.expertise.map(e => {
        let row = document.createElement('div');
        row.classList.add('row');
        row.appendChild(generateDivColumn(e.name, 'short'));
        row.appendChild(generateDivColumn(e.value, 'short'));
        row.appendChild(generateDivColumn(e.length, 'short'));
        div.appendChild(row);
    });
}

function buildWorkHistoryDiv() {
    let div = document.getElementById('wh-summary');
    config.work_history.map(w => {
        let company = document.createElement('div');
        company.classList.add('row'); 
        company.appendChild(generateDivColumn(`${w.company}`, 'long', 'bold'));
        company.appendChild(generateDivColumn(`${empty}`, 'long'));
        company.appendChild(generateDivColumn(`${w.time}`, 'long'));
        company.appendChild(generateDivColumn(`${w.length}`, 'long'));
        div.appendChild(company);

        let project = document.createElement('div');
        project.classList.add('row'); 
        project.appendChild(generateDivColumn(`${w.title}`, 'long'));
        project.appendChild(generateDivColumn(`${w.project}`, 'long', 'italic'));
        project.appendChild(generateDivColumn(`${w.location}`, 'long'));
        div.appendChild(project);
        div.appendChild(document.createElement('br'));

        w.notes.map(note => {
            let noteRow = document.createElement('div');
            noteRow.classList.add('row');
            noteRow.appendChild(generateDivColumn(`${note}`, 'row'));
            div.appendChild(noteRow);
        });
        div.appendChild(document.createElement('br'));
        div.appendChild(document.createElement('br'));
    });
}

function buildEducationHistoryDiv() {
    let div = document.getElementById('edu-summary');
    config.education.map(e => {
        let edu = document.createElement('div');
        edu.classList.add('row');
        edu.appendChild(generateDivColumn(`${e.degree}`, 'long'));
        edu.appendChild(generateDivColumn(`${e.location}`, 'long'));
        div.appendChild(edu);
    });
}

function generateDivColumn(value, length, style) {
    let col = document.createElement('div');
    col.classList.add(`column-${length}`);
    if(style == 'bold'){
        col.style.fontWeight = "bold";
    }
    if(style == 'italic') {
        col.style.fontStyle = "italic";
    }
    col.innerHTML = value;
    return col; 
}
