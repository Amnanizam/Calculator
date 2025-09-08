
let on = false;

function togglePower(button) {
    on = !on;
    if (on) {
        button.textContent = "ON";
        button.style.color = "green";
        button.style.backgroundColor = "#d6ffd6";
        setCalculatorState(true);
    } else {
        button.textContent = "OFF";
        button.style.color = "red";
        button.style.backgroundColor = "#ffd6d6";
        setCalculatorState(false);
        document.getElementById("display").value = ""; 
    }
}

function setCalculatorState(enabled) {
    const buttons = document.querySelectorAll("#keys button");
    buttons.forEach(btn => {
        if (btn.id !== "powerButton") { 
            btn.disabled = !enabled;
            btn.style.opacity = enabled ? "1" : "0.5"; 
        }
    });

    const display = document.getElementById("display");
    display.disabled = !enabled;
    display.style.backgroundColor = enabled ? "white" : "#f0f0f0";
}

document.addEventListener("keydown", function (e) {
    if (!on) {
        e.preventDefault(); 
    }
});

function del() {
  display.value = display.value.slice(0, -1);
}

window.onload = function() {
    setCalculatorState(false); 
    document.getElementById("display").value = ""; 
};



function percentDis() {
    if (on) {
        const d = document.getElementById("display");
        let value = parseFloat(d.value);
        if (!isNaN(value)) {
            d.value = value / 100;
        } else {
            d.value = "Error";
        }
    }
}

const display=document.getElementById("display")
function append(input){
display.value+=input
}

function clearDis(){
    display.value= ""
}
function calculate(){
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value="ERROR"
    }
}
