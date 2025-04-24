function clearScreen() {
    document.getElementById("result").innerHTML = "0";
    }
    
    function display(value) {
    let result = document.getElementById("result");
    if (result.innerHTML == "0") {
    result.innerHTML = value;
    } else {
    result.innerHTML += value;
    }
    }
    
    function calculate() {
    let result = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = eval(result);
    }