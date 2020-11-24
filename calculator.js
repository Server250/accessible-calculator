const keys = document.querySelector('.calculator-buttons');
const display = document.querySelector('.calculator-display');
const calculator = keys.parentElement;

console.log(calculator)

// Init
calculator.dataset.firstNumber="";
calculator.dataset.operator="";
keys.dataset.resetInput="true";

keys.addEventListener('click', event => {
    
    // If the user clicks between calculator keys, exit
    if (!event.target.closest('button')) return;

    const key = event.target;
    const keyValue = key.textContent;
    const displayValue = display.textContent;

    //console.log(key.dataset.type);
    switch (key.dataset.type) {
        case "number":
            if (keys.dataset.resetInput==="true")
            {
                keys.dataset.resetInput="false";
                display.textContent=keyValue;
            }
            else
            {
                display.textContent=displayValue+keyValue;
            }
            break;
        case "decimal":
            if (displayValue.includes(".")) return;

            if (keys.dataset.resetInput==="true")
            {
                keys.dataset.resetInput="false";
                display.textContent="0."
            }
            else
            {
                display.textContent=displayValue+".";
            }
            break;
        case "clear":
            keys.dataset.resetInput = "true";
            display.textContent="0";
            break;
        case "operator":
                calculator.dataset.firstNumber=displayValue;
                calculator.dataset.operator=key.dataset.val;
                keys.dataset.resetInput = "true";
            break;
        case "equals":
            switch (calculator.dataset.operator) {
                case "+":
                    display.textContent=parseFloat(calculator.dataset.firstNumber)+parseFloat(displayValue);
                    keys.dataset.resetInput = "true";
                    break;
                case "-":
                    display.textContent=parseFloat(calculator.dataset.firstNumber)-parseFloat(displayValue);
                    keys.dataset.resetInput = "true";
                    break;
                case "×":
                    display.textContent=parseFloat(calculator.dataset.firstNumber)*parseFloat(displayValue);
                    keys.dataset.resetInput = "true";
                    break;
                case "÷":
                    display.textContent=parseFloat(calculator.dataset.firstNumber)/parseFloat(displayValue);
                    keys.dataset.resetInput = "true";
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }

});