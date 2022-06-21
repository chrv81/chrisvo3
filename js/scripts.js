import { experiences } from './data.js';

let projects = [
    {
        name: "Mobile Casino",
        description: "a casino application that have 4 different games: black jack, codfish, crown and arch, street craps",
        using: ["Java", "Spring Boot", "Angular"],
        demo: "",
        github: "https://github.com/TierneyMellen/fullstack.server.groupproject-casinosimulation"

    },
    {
        name: "Student4Student",
        description: "an exchange/trade app for college students",
        using: ["JavaScript", "jQuery", "Semantic UI"],
        demo: "",
        github: "https://github.com/chrisvo3/student4student"
    }
];

const keyExp = ['[URL]', '[COMP]', '[TITLE]', '[START]', '[END]', '[SKILLS]'];
const tempExp = '<li><p><a href="[URL]" target="_blank" title="[COMP]">[COMP]</a><br /><strong>[TITLE]</strong><br /><span>[START] ~ [END]</span><p class="related-skill">[SKILLS]</p></p></li>';

// loading experience 
function onPageLoadExp() {
    var domExpList = document.getElementById("experiences");
    const listExp = experiences.map((exp, index) => {
        return tempExp.replace(keyExp[0], exp.url)
                .replaceAll(keyExp[1], exp.comp)
                .replace(keyExp[2], exp.title)
                .replace(keyExp[3], exp.start)
                .replace(keyExp[4], !exp.end ? 'Present' : exp.end)
                .replace(keyExp[5], exp.skills);
    });
    listExp.forEach(list => {
        console.log(list);
        domExpList.insertAdjacentHTML('beforeend', list);
    });
}
window.onload = onPageLoadExp;

function btnLoad() {
    var btnHide = document.getElementById("btnHide");
    btnHide.classList.remove("hide");

    var btnLoad = document.getElementById("btnLoad");
    btnLoad.classList.add("hide");

    // alert(projects[0].name);
    var list = document.getElementById("projects");
    projects.forEach(project => {
        var str = '<li><b>' + project.name + '</b> -- ' + project.description + '<br />';
        str += '<span>' + project.using + '</span>';
        str += '<div class="btn-group">';
        if (project.demo == null || project.demo == "") {
            str += '<input class="btn hidden" type="button" value="[ demo ]" title="' + project.name + 'Demo" />'
        }
        str += '<input class="btn" type="button" value="[ github ]" title="' + project.name + '" onclick="window.open("' + project.github + '","_blank")" />'
        str += '</div>';
        list.insertAdjacentHTML('beforeend', str);
    });
}

function btnHide() {
    var btnHide = document.getElementById("btnHide");
    btnHide.classList.add("hide");

    var btnLoad = document.getElementById("btnLoad");
    btnLoad.classList.remove("hide");

    document.getElementById("projects").innerHTML  = "";
}