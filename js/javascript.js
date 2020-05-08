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

function btnLoad() {
    // alert("Loading...");
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
    // alert("hide");
    var btnHide = document.getElementById("btnHide");
    btnHide.classList.add("hide");

    var btnLoad = document.getElementById("btnLoad");
    btnLoad.classList.remove("hide");

    document.getElementById("projects").innerHTML  = "";
}