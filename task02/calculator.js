function calculate() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let operator = document.getElementById("Operators").value;
    let result = 0;

    if (operator == '+') {
        result = num1 + num2;
    } else if (operator == '-') {
        result = num1 - num2
    } else if (operator == '*') {
        result = num1*num2
    } else{
        if (num2 == 0) {
            alert('Division by 0 is invalid! Please try again')
        } else {
            result = num1/num2
        }
    }

    `The expression: <strong>${num1} ${operator} ${num2}</strong>`
    document.getElementById('result').innerHTML = `The expression: <strong>${num1} ${operator} ${num2}</strong> 
                                                    The result is <strong>${result}</strong>`
}