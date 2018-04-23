var gato = document.getElementsByClassName("gato");
var play = document.getElementById("play");
var player = null;
var gato1 = document.getElementById("gato1");
var gato2 = document.getElementById("gato2");
var gato3 = document.getElementById("gato3");
var gato4 = document.getElementById("gato4");
var gato5 = document.getElementById("gato5");
var gato6 = document.getElementById("gato6");
var gato7 = document.getElementById("gato7");
var gato8 = document.getElementById("gato8");
var gato9 = document.getElementById("gato9");

function start(){

    for (i = 0; i < gato.length; i++){
        gato[i].addEventListener("click",function(){
            cambiar(this);
        });
    }
    play.addEventListener("click",function(){
        empezar();
    });

}
//Cambia la imagen
function cambiar(param){
    var touched = hasClass(param,"touched");
    if(play.innerHTML != "¡Empezar!"){
        if(!touched){
            if(player == 1){
                param.setAttribute("src","img/x.png");
                player = 0;
                play.innerHTML = "¡Juega O!";
            }
            else if(player == 0){
                param.setAttribute("src","img/o.png");
                player = 1;
                play.innerHTML = "¡Juega X!";
            }
            param.setAttribute("class","responsive-img gato touched");
            verificar();
        }
    }

}
//Inicia el juego
function empezar(){
    if(play.innerHTML == "¡Empezar!"){
        play.innerHTML = "¡Juega X!";
        player = 1;
    }
    else if(play.innerHTML == "¡Otra vez!"){
        location.reload();
    }
}
//Confirma que no se haya seleccionado antes
function hasClass(elem, clase) {
    return new RegExp('(\\s|^)'+clase+'(\\s|$)').test(elem.className);
}
function verificar(){
    if(gato1.getAttribute("src") == "img/x.png" && gato2.getAttribute("src") == "img/x.png" && gato3.getAttribute("src") == "img/x.png"){
        alert("¡Ganó X!");
        play.innerHTML = "¡Otra vez!";
    }
    else if(gato1.getAttribute("src") == "img/o.png" && gato2.getAttribute("src") == "img/o.png" && gato3.getAttribute("src") == "img/o.png"){
        alert("¡Ganó O!");
        play.innerHTML = "¡Otra vez!";
    }
    else if(gato4.getAttribute("src") == "img/x.png" && gato5.getAttribute("src") == "img/x.png" && gato6.getAttribute("src") == "img/x.png"){
        alert("¡Ganó X!");
        play.innerHTML = "¡Otra vez!";
    }
    else if(gato4.getAttribute("src") == "img/o.png" && gato5.getAttribute("src") == "img/o.png" && gato6.getAttribute("src") == "img/o.png"){
        alert("¡Ganó O!");
        play.innerHTML = "¡Otra vez!";
    }
    else if(gato7.getAttribute("src") == "img/x.png" && gato8.getAttribute("src") == "img/x.png" && gato9.getAttribute("src") == "img/x.png"){
        alert("¡Ganó X!");
        play.innerHTML = "¡Otra vez!";
    }
    else if(gato7.getAttribute("src") == "img/o.png" && gato8.getAttribute("src") == "img/o.png" && gato9.getAttribute("src") == "img/o.png"){
        alert("¡Ganó O!");
        play.innerHTML = "¡Otra vez!";
    }
    else if(gato1.getAttribute("src") == "img/x.png" && gato4.getAttribute("src") == "img/x.png" && gato7.getAttribute("src") == "img/x.png"){
        alert("¡Ganó X!");
        play.innerHTML = "¡Otra vez!";
    }
    else if(gato1.getAttribute("src") == "img/o.png" && gato4.getAttribute("src") == "img/o.png" && gato7.getAttribute("src") == "img/o.png"){
        alert("¡Ganó O!");
        play.innerHTML = "¡Otra vez!";
    }
    else if(gato2.getAttribute("src") == "img/x.png" && gato5.getAttribute("src") == "img/x.png" && gato8.getAttribute("src") == "img/x.png"){
        alert("¡Ganó X!");
        play.innerHTML = "¡Otra vez!";
    }
    else if(gato2.getAttribute("src") == "img/o.png" && gato5.getAttribute("src") == "img/o.png" && gato8.getAttribute("src") == "img/o.png"){
        play.innerHTML = "¡Ganó O!";
    }
    else if(gato3.getAttribute("src") == "img/x.png" && gato6.getAttribute("src") == "img/x.png" && gato9.getAttribute("src") == "img/x.png"){
        alert("¡Ganó X!");
        play.innerHTML = "¡Otra vez!";
    }
    else if(gato3.getAttribute("src") == "img/o.png" && gato6.getAttribute("src") == "img/o.png" && gato9.getAttribute("src") == "img/o.png"){
        alert("¡Ganó O!");
        play.innerHTML = "¡Otra vez!";
    }
    else if(gato1.getAttribute("src") == "img/x.png" && gato5.getAttribute("src") == "img/x.png" && gato9.getAttribute("src") == "img/x.png"){
        alert("¡Ganó X!");
        play.innerHTML = "¡Otra vez!";
    }
    else if(gato1.getAttribute("src") == "img/o.png" && gato5.getAttribute("src") == "img/o.png" && gato9.getAttribute("src") == "img/o.png"){
        alert("¡Ganó O!");
        play.innerHTML = "¡Otra vez!";
    }
    else if(gato3.getAttribute("src") == "img/x.png" && gato5.getAttribute("src") == "img/x.png" && gato7.getAttribute("src") == "img/x.png"){
        alert("¡Ganó X!");
        play.innerHTML = "¡Otra vez!";
    }
    else if(gato3.getAttribute("src") == "img/o.png" && gato5.getAttribute("src") == "img/o.png" && gato7.getAttribute("src") == "img/o.png"){
        alert("¡Ganó O!");
        play.innerHTML = "¡Otra vez!";
    }
    else{
        if(hasClass(gato1,"touched") && hasClass(gato2,"touched") && hasClass(gato3,"touched") && hasClass(gato4,"touched") && hasClass(gato5,"touched")
            && hasClass(gato6,"touched") && hasClass(gato7,"touched") && hasClass(gato8,"touched") && hasClass(gato9,"touched")){
            play.innerHTML = "¡Empate!";
            alert("¡Empate!");
            play.innerHTML = "¡Otra vez!";
        }
    }

}
