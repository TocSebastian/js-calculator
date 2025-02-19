const numberButtons = document.querySelectorAll("[id^='number_']");

let display = document.querySelector(".display_element");

let clearButton = document.querySelector(".clear");

let expression_to_evaluate = '';

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        console.log(`You clicked: ${button.textContent}`);
        display.textContent = display.textContent + button.textContent;
        expression_to_evaluate = expression_to_evaluate + String(button.textContent);
    });
});

clearButton.addEventListener("click", () => {
    display.textContent = '';
    expression_to_evaluate = '';
})

const operatorsButtons = document.querySelectorAll("[id^='operator_']");

operatorsButtons.forEach(operator_button => {
    operator_button.addEventListener("click", () => {
        if (operator_button.textContent != '='){
        console.log(`You clicked: ${operator_button.textContent}`);
        display.textContent = display.textContent + operator_button.textContent;
        expression_to_evaluate = expression_to_evaluate + String(operator_button.textContent);
    }
    });
});


function sum(a, b){
    let result = a + b
    if (result % 1 != 0){
        result = result.toFixed(2)
    }
    return result
}

function minus(a, b){
    let result = a - b
    if (result % 1 != 0){
        result = result.toFixed(2)
    }
    return result
}

function divide(a, b){
    let result = a / b
    if (result % 1 != 0){
        result = result.toFixed(2)
    }
    return result
}

function multiply(a, b){
    let result = a * b
    if (result % 1 != 0){
        result = result.toFixed(2)
    }
    return result
}

function compute_expression(expression_components){
    let number_1 = parseFloat(expression_components.at(0));
    let number_2 = parseFloat(expression_components.at(2));

    let expression_operator = expression_components.at(1);

    let expression_result;

    if (expression_operator == "+"){
        expression_result = sum(number_1, number_2);
    }else if (expression_operator == "-"){
        expression_result = minus(number_1, number_2);
    }else if (expression_operator == "/"){
        expression_result = divide(number_1, number_2);
    }else if (expression_operator == "*"){
        expression_result = multiply(number_1, number_2);
    }

    console.log(`expression_result result: ${expression_result}`);
    return expression_result
}



function evaluateExpression(expression){
    expression = String(expression);
    let operators = ['+', '-', '/', '*'];
    let expression_result = null;

    for(let operator of operators){
        if (expression.includes(operator)){
            let expression_components_list = expression.split(operator);
            expression_components_list.splice(1, 0, operator);

            console.log(`expression_components_list result: ${expression_components_list}`);
            
            expression_result = compute_expression(expression_components_list);
            break;
        };
    };
    console.log(`evaluateExpression result: ${expression_result}`);
    return expression_result;
};


const equalButton = document.querySelector("#operator_equal");

equalButton.addEventListener("click", () => {
    console.log(`You clicked: ${equalButton.textContent}`);
    console.log(`You clicked: ${display.textContent}`);

    let result = evaluateExpression(expression_to_evaluate);
    if (result !== null && result !== undefined) {
        display.textContent = result; // Only update if the result is valid
        expression_to_evaluate = String(result);
    }
});



