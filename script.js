function calculate(operation) {
    // Get the values entered by the user
    const firstNumber = document.getElementById("number1").value;
    const secondNumber = document.getElementById("number2").value;

    // Square only needs the first number; other operations need both
    if (operation === "square") {
        if (firstNumber === "") {
            document.getElementById("result").textContent =
                "Please enter the first number.";
            return;
        }
    } else if (firstNumber === "" || secondNumber === "") {
        document.getElementById("result").textContent =
            "Please enter two numbers.";
        return;
    }

    // Convert the input values from text into numbers
    const number1 = Number(firstNumber);
    const number2 = Number(secondNumber);

    let answer;
    let expression;

    // Select the correct mathematical operation
    if (operation === "add") {
        answer = number1 + number2;
        expression = number1 + " + " + number2;
    } else if (operation === "subtract") {
        answer = number1 - number2;
        expression = number1 + " − " + number2;
    } else if (operation === "multiply") {
        answer = number1 * number2;
        expression = number1 + " × " + number2;
    } else if (operation === "divide") {
        // Prevent division by zero
        if (number2 === 0) {
            document.getElementById("result").textContent =
                "Cannot divide by zero.";
            return;
        }

        answer = number1 / number2;
        expression = number1 + " ÷ " + number2;
    } else if (operation === "remainder") {
        // Remainder by zero is not defined
        if (number2 === 0) {
            document.getElementById("result").textContent =
                "Cannot divide by zero.";
            return;
        }

        answer = number1 % number2;
        expression = number1 + " % " + number2;
    } else if (operation === "square") {
        answer = number1 * number1;
        expression = number1 + "²";
    }

    // Display the selected operation with the answer
    document.getElementById("result").textContent =
        "Result: " + expression + " = " + answer;
}

function clearCalculator() {
    // Remove the values from the input fields
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

    // Reset the displayed result
    document.getElementById("result").textContent = "Result: 0";
}
