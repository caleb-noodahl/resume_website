(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
    "info" : {
        "name" : "Caleb Williams",
        "phone" : "(512)-426-4576",
        "email" : "caleb@noodahl.com",
        "url": "https://github.com/caleb-noodahl/resume_website",
        "spec" : "Application & Database Developer, Site Reliability Engineer"
    },
    "summary" : {
        "desc" : "Experienced full stack developer with a demonstrated history of working in financial services, offshore drilling, and industrial safety industries. Practiced in building and supporting enterprise applications with specializations in T-SQL, MongoDB, C# & NodeJS.",
        "expertise" : [
            {
                "name" : "Languages",
                "value" : "C#, T-SQL, Javascript, NodeJS",
                "length" : "3-6 years experience"
            },
            {
                "name" : "Version Control",
                "value" : "Github, Bitbucket, SVN, TFS, Liquibase",
                "length" : ""
            },
            {
                "name" : "IDEs",
                "value" : "Visual Studio Code, Visual Studios 2010 - Current, Microsoft SQL Management Studio, Studio3T",
                "length" : ""
            },
            {
                "name": "Frameworks/Tooling",
                "value" : "Selenium, Nunit, WPF, Winforms, ASP.NET MVC, Vue.js, Splunk, Jira, MongoDB Ops, RabbitMQ, PM2, PCF, Akamai",
                "length" : ""
            },
            {
                "name" : "Other Skills",
                "value" : "Agile scrum methodology. Design and architecture planning. Junior Developer mentoriship.",
                "length" : ""
            },
            {
                "name" : "Learning/Interests",
                "value" : "Gitlab, Golang, Firebase, AWS, PCF",
                "length" : ""
            }
        ]
    },
    "education" : [
        {
            "degree" : "Associates of Science",
            "location" : "Lonestar Community College"
        },        {
            "degree" : "Electronic Maintenance Training",
            "location" : "Fort Gordon, GA"
        }
    ],
    "work_history" : [
        {
            "company" : "CHARLES SCHWAB",
            "title" : "SITE RELIABILITY ENGINEER",
            "project" : "Schwab Intelligent Portfolios",
            "location" : "Austin, TX",
            "time" : "Nov 2016 - Current",
            "length" : "",
            "notes" : [
                "Created custom middleware software connecting Jira, BMC Remedy, Bitbucket, Splunk & MongoDB to expedite root cause analysis from client escalations.",
                "Technological spearhead for Site Reliability Initiative; a transition from traditional system operations supporting strategy an automation focused model.",
                "Designed and implemented ticket escalation automation pipeline reducing ticket toil by ~300 man hours of manual data analysis.",
                "Acted as SQL subject matter expert during acquisition translating and importing thousands client records into existing systems efficiently.",
                "Transposed terabytes of non-relational MongoDB/json data into pragmatic formats for business consumption.",
                "Engineered interim solutions to repair & monitor client data affected by application oversight between build windows.",
                "Empowered peers and junior with custom automation & tooling enabling greater visibility into application health reducing detection time of production impacting events."
            ]
        },
        {
            "company" : "DIMENSION TECHNOLOGY SOLUTIONS",
            "title" : "SOFTWARE ENGINEER AND APPLICATION SUPPORT",
            "project" : "eMESA Live, ENSCO PLC",
            "location" : "Houston, TX",
            "time" : "May 2014 - Nov 2016",
            "length" : "2yrs 7mos",
            "notes" : [
                "Involved in all aspects of software development from conception to completion, including the design of innovative, tailored features based on outlined contracts.",
                "Enhanced UI design and reduce load times through updating ASP.NET application; design and execute custom error reporting tools to reduce downtime and client costs.",
                "Constructed custom SQL replication solution migrating data to 50+ global remote servers, as well as facilitate database schema knowledge to client’s business analysts and DBAs.",
                "Implemented automated testing solutions to identify deficiencies prior to production; provided remote client assistance for bug reports and feature requests.",
                "Collaborated development responsibilities on weekly sprints to establish new features; provide training and guidance for junior software developers.",
                "Translated complex business logic into code requiring fundamental understanding of business operations."
            ]
        },
        {
            "company" : "ALL TECHNOLOGY SOLUTIONS",
            "title" : "JUNIOR DEVELOPER",
            "project" : "BITS Information Systems, FLUOR CANADA",
            "location" : "Remote - Houston, TX",
            "time" : "May 2014 - Nov 2016",
            "length" : "8mos",
            "notes" : [
                "Conducted performance testing on new features on existing functionality, utilizing OOP programming and MVC architecture.",
                "Liaised with clients and software engineers to facilitate porting functionality from legacy WinForms application into WPF solutions; Developed SQL migration tools to optimize back end architecture.",
                "Enhanced user experiences and customization options through the incorporation of Telerik UI.",
                "Managed server file library utilized in numerous applications; provide legacy application support maintenance."
            ]
        },
        {
            "company" : "UNITED STATES ARMY",
            "title" : "SPECIALIST, 94F – SPECIAL ELECTRONIC REPAIRER",
            "project" : "Active Duty",
            "location" : "Fort Drum, NY",
            "time" : "Aug 2008 - May 2011",
            "length" : "2yrs 10mos",
            "notes" : [
                "Oversaw inventory of $2M+ in equipment in parts; generated daily, monthly and annual reports.",
                "Delegated daily responsibilities of junior subordinates, ensuring completion and regulation compliance.",
                "Conducted operational activities in remote theaters of deployment.",
                "Honorably discharged",
                "Secret Security Clearance (Expired)."
            ]
        }
    ]
}
},{}],2:[function(require,module,exports){
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

},{"./config.json":1}]},{},[2]);
