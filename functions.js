var current_number = "0";  
var stored_number = 0;
var operator = "";

//function: decimal
//input: pressing the button "." on the calculator
//output: adds the decimal button at the end of the current number 

function button_decimal() {
    if (current_number.indexOf(".") == -1) {
        current_number = parseFloat(current_number) + ".";
    }
    document.getElementById ("display").innerHTML = current_number;
    
}

//function: numbers
//input: pressing any digit displayed on the calculator from 0-9
//output: adds the said number onto the display, and pushes the digit to a new place when another gets added

function button_number(digit) {
	current_number = current_number + digit;
	document.getElementById ("display").innerHTML = parseFloat(current_number);
}

//function: clear
//input: pressing the button "C" on the calculator
//output: it clears the current number and the stored number, then shows the display "0" to clear up

function button_clear() {
    
    current_number = "0";
    stored_number = 0;
    operator = "";
    document.getElementById ("display").innerHTML = 0;
    
}

//function: operator
//input: takes what is given from button_equal
//output: stores the first set of numbers while giving the new current number 0 that can be used again

function button_operator (operation) {
    button_equal();
    stored_number = parseFloat(current_number);
    current_number = "0";
    operator = operation;
    
}

//function: equal
//input: any of the button under the div tag onclick of "button_operator(___)"
//output: takes the stored number and does what the given operation says to the current number

function button_equal() {
    if (operator == "add") {
        current_number = stored_number + parseFloat(current_number) + "";
    }
    if (operator == "sub") {
        current_number = stored_number - parseFloat(current_number) + "";
    }    
    if (operator == "multiply") {
        current_number = stored_number * parseFloat(current_number) + "";
    }
    if (operator == "divide") {
        current_number = stored_number / parseFloat(current_number) + "";
    }
    if (operator == "pow") {
        current_number = Math.pow(stored_number, parseFloat(current_number)) + "";
    }
    
    
    
    stored_number = 0;
    operator = "";
    document.getElementById ("display").innerHTML = parseFloat(current_number);
}

//function: miscellaneous mathematical operations
//input: any of the button under the div tag onclick of "button_single(___)"
//output: takes the stored number and does what the given operation says to the current number

function button_single(op) {
    if (op == "sin") {
        current_number = Math.sin(parseFloat(current_number)) + "";
    }    
    if (op == "cos") {
        current_number = Math.cos(parseFloat(current_number)) + "";    
    }
    if (op == "tan") {
        current_number = Math.tan(parseFloat(current_number)) + "";    
    }
    if (op == "sqrt") {
        current_number = Math.sqrt(parseFloat(current_number)) + "";
    }
        
    document.getElementById ("display").innerHTML = parseFloat(current_number);    
}

//function: pi
//input: pressing the button pi on the calculator
//output: multiplies the mathematical number pi by the current number
//if theres no number, display pi itself

function button_pi() {
    if (parseFloat(current_number) == 0 ) {
        current_number = Math.PI + "";
    }
    else {
        current_number = Math.PI * parseFloat(current_number) + "";
    }
    document.getElementById ("display").innerHTML = parseFloat(current_number);
}