const numberButtons = document.querySelectorAll(".btn-number");
const optionButtons = document.querySelectorAll(".btn-option");
const mainScreen = document.querySelector(".main-screen");
const littleScreen = document.querySelector(".little-screen");
let value = 0;
let a = 0;
let b = 0;
let operation = null;

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", function() {
        value = numberButtons[i].textContent;

        /** If the screen is empty or I've already inserted the first term 
         *  than it allows me to insert the second term */ 

        if (mainScreen.innerHTML == 0.00 || mainScreen.innerHTML == a) {
            mainScreen.innerHTML = value;
        } else {
            mainScreen.innerHTML += value;
        }
    });
}

for (let j = 0; j < optionButtons.length; j++) {
    optionButtons[j].addEventListener("click", function() {
        switch (optionButtons[j].innerHTML) {
            case "+":
                a = mainScreen.innerHTML;
                operation = "+";
                littleScreen.innerHTML = a + "+";
                break;
            case "-": 
                a = mainScreen.innerHTML;
                operation = "-";
                littleScreen.innerHTML = a + "-";
                mainScreen.innerHTML = "";
                break;
            case "X": 
                a = mainScreen.innerHTML;
                operation = "X";
                littleScreen.innerHTML = a + "x";
                mainScreen.innerHTML = "";
                break;
            case "/": 
                a = mainScreen.innerHTML;
                operation = "/";
                littleScreen.innerHTML = a + "/";
                mainScreen.innerHTML = "";
                break;
            case "=": 
                calculate(a, operation);
                break;
            default: 
                mainScreen.innerHTML = "0.00";
                littleScreen.innerHTML = "";
                break;
        }
    });

}

function calculate(a, operator) {
    let result = 0;
    if (a != 0) {
        b = mainScreen.innerHTML;
        switch (operator) {

            /** After detecting the operation, print the full operation on the upper screen
             *  and only the result on the main screen */
            
            case "+":
                result = parseFloat(a) + parseFloat(b);
                mainScreen.innerHTML = result;
                littleScreen.innerHTML += b + "=" + result;
                break;
            case "-":
                result = parseFloat(a) - parseFloat(b);
                mainScreen.innerHTML = result;
                littleScreen.innerHTML += b + "=" + result;
                break;
            case "X":
                result = parseFloat(a) * parseFloat(b);
                mainScreen.innerHTML = result;
                littleScreen.innerHTML += b + "=" + result;
                break;
            case "/":
                result = parseFloat(a) / parseFloat(b);
                mainScreen.innerHTML = result;
                littleScreen.innerHTML += b + "=" + result;
                break;
            default:
                result = (parseFloat(a) * parseFloat(b)) / 100;
                mainScreen.innerHTML = result;
                littleScreen.innerHTML += b + "=" + result;
                break;
        }
    }
}