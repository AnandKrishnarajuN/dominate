function calculate() {
    const firstNumber = Number(document.getElementById("num1").value);
    const secondNumber = Number(document.getElementById("num2").value);
    const thirdNumber = Number(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    let output;
    switch (operator) {
        case "-":
            output = firstNumber - secondNumber - thirdNumber;
            break;
        case "+":
            output = firstNumber + secondNumber + thirdNumber;
            break;
        case "*":
            output = firstNumber * secondNumber * thirdNumber;
            break;
        case "/":
            output = firstNumber / secondNumber;
            break;
    }

    document.getElementById("result").textContent = output;
}