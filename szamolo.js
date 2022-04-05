window.addEventListener("load", init);

function init(){
    for (let index = 0; index < 10; index++) {
        var gomb = document.querySelectorAll(".szamok")[0];
        gomb.innerHTML += "<button></button>";
        var szam = document.querySelectorAll("button")[index];
        szam.innerHTML = index;
    }
 
}

function ID(elem) {
    return document.getElementById(elem);
}

function $(elem) {
    return document.getElementsByClassName
}



//var gombok = document.querySelectorAll(".szamok>button")
//console.log(gombok)
//elem.addEventListener("click", kattint);