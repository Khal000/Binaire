let gameState = 1;
const screen = document.getElementsByClassName('calculator-screen')[0];
const password = "65";
var tentative = 0;

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
            if (tentative == 3) {
              console.log("aide 1")
            }
            if (tentative == 5) {
              console.log("aide 2")
            }

            if (screen.value === password) {
                screen.value = "Bien joué !";
                gameState = password;
            } else {
                screen.value = "Loupé !";
                await new Promise(r => setTimeout(r, 500));
                screen.value = "";
            }
        } else
            screen.value += element.value;
    }
}

let draw_binary = (password) =>  {
    icons = document.querySelectorAll("i");
    console.log(icons)
    for (let index = 0; index < password.length; index++) {
        password[index] == "1" ? icons[index].style.color = "#ffc107" : icons[index].style.color = "#252525"
    }
}

draw_binary("01000001")
