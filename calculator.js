const numberButtons = document.querySelectorAll(".btn-number");
const optionButtons = document.querySelectorAll(".btn-option");
const mainScreen = document.querySelector(".main-screen");
const littleScreen = document.querySelector(".little-screen");
let value = 0;
let a = null;
let b = null;
let operation = null;
let res = 0;

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", function() {
        value = numberButtons[i].textContent;

        /** The user can insert a maximum of 12 characters on the screen */

        if(mainScreen.innerHTML.length < 12) {

            /** If the screen is empty or I've already inserted the first term 
             *  than it allows me to insert the second term */ 

            if (mainScreen.innerHTML === "0.00" || mainScreen.innerHTML == a) {
                mainScreen.innerHTML = value;
            } else {
                mainScreen.innerHTML += value;
            }
        }

    });
}

for (let j = 0; j < optionButtons.length; j++) {
    optionButtons[j].addEventListener("click", function() {
        switch (optionButtons[j].innerHTML) {
            case "+":
                operation = "+";
                checkForMultipleOperation(operation);
                break;
            case "-": 
                operation = "-";
                checkForMultipleOperation(operation);
                break;
            case "X": 
                operation = "x";
                checkForMultipleOperation(operation);
                break;
            case "/": 
                operation = "/";
                checkForMultipleOperation(operation);
                break;
            case "%": 
                a = mainScreen.innerHTML;
                operation = "%";
                littleScreen.innerHTML = a + "%";
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

function calculate(a, operation) {
    let result = 0;
    if (a != 0) {
        b = mainScreen.innerHTML;
        switch (operation) {

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
            case "x":
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

/** Function that allows us to do operations in sequence */

function checkForMultipleOperation(operation) {

    let lastCharInserted = littleScreen.innerHTML.slice(littleScreen.innerHTML.length - 1);
    
    if(lastCharInserted === "+" || lastCharInserted === "-" || lastCharInserted === "x" || lastCharInserted === "/") {

        console.log(lastCharInserted);

        /** Check which is the last operator digited, doing the corresponding operation and
         *  saving the temporary result inside res */

        switch (lastCharInserted) {
            case "+":
                res = parseFloat(a) + parseFloat(mainScreen.innerHTML);
                break;
            case "-":
                res = parseFloat(a) - parseFloat(mainScreen.innerHTML);
                break;
            case "x":
                res = parseFloat(a) * parseFloat(mainScreen.innerHTML);
                break;       
            default:
                res = parseFloat(a) / parseFloat(mainScreen.innerHTML);
                break;
        }

        /** Update the screens */

        littleScreen.innerHTML += mainScreen.innerHTML + operation;
        mainScreen.innerHTML = res;
        a = res;
    } else {
        a = mainScreen.innerHTML;
        littleScreen.innerHTML = a + operation;
    }
}