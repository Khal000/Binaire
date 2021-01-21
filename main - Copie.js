let gameState = 1;
const screen = document.getElementsByClassName('calculator-screen')[0];
var tentative = 0;
var reussite = 0;
var echec = 0;
let i = 0;
const reducer = (accumulator, currentValue) => accumulator + currentValue;

var l1 = {nombre : 1, led : document.getElementById("L8")};
var l2 = {nombre : 2, led : document.getElementById("L7")};
var l3 = {nombre : 4, led : document.getElementById("L6")};
var l4 = {nombre : 8, led : document.getElementById("L5")};
var l5 = {nombre : 16, led : document.getElementById("L4")};
var l6 = {nombre : 32, led : document.getElementById("L3")};
var l7 = {nombre : 64, led : document.getElementById("L2")};
var l8 = {nombre : 128, led : document.getElementById("L1")};

var lettre1 = document.getElementById("lettre1");
var lettre2 = document.getElementById("lettre2");
var lettre3 = document.getElementById("lettre3");

var tab = [l1, l2, l3, l4, l5, l6, l7, l8];
var tab2 = [];
var numRandom = 0;
var binRandom = 0;
var password = 0;

function jeuBin(){
  do{
    i++;
    numRandom = Math.floor(Math.random()*tab.length);
    binRandom = tab[numRandom];
    binRandom.led.style.color = "green";
    tab2.push(binRandom.nombre);
  }while (i < 4);

  var sans_doublons = Array.from(new Set(tab2));

  password = sans_doublons.reduce(reducer);
  i=0;
  console.log(sans_doublons);
  console.log(password);
}
jeuBin();

screen.value = "";

window.addEventListener('click', e => {
    if (e.toElement.localName === "button" && e.toElement.parentNode.className === "calculator-keys") {
        check_case(e.toElement);
    }
})

let check_case = async (element) =>  {
    if (gameState) {
        if (element.value === "all-clear")
            screen.value = "";
        else if (element.value === "check") {
            tentative++
            console.log("Nombre de tentative : " + tentative);

            if (screen.value === password.toString()) {
                screen.value = "Bien joué !";
                tab2 = [];

                l1.led.style.color = "#252525";
                l2.led.style.color = "#252525";
                l3.led.style.color = "#252525";
                l4.led.style.color = "#252525";
                l5.led.style.color = "#252525";
                l6.led.style.color = "#252525";
                l7.led.style.color = "#252525";
                l8.led.style.color = "#252525";

                reussite++;
                if (reussite == 1){
                  lettre1.style.visibility = "visible";
                }
                if (reussite == 2){
                  lettre2.style.visibility = "visible";
                }
                if (reussite == 3){
                  lettre3.style.visibility = "visible";
                  await new Promise(r => setTimeout(r, 1000));
                  alert("tu peux passer au jeu suivant");
                }
                await new Promise(r => setTimeout(r, 1000));
                screen.value = "";
                gameState = password;
                jeuBin();

            } else {
                screen.value = "Loupé !";
                echec++;
                if (echec == 3){
                  console.log("aide1")
                }
                if (echec == 6){
                  console.log("aide2")
                }
                await new Promise(r => setTimeout(r, 1000));
                screen.value = "";
            }
        } else
            screen.value += element.value;
    }
}
