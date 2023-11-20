let currentInput = '';
let currentOperation = '';
let nextInput ='';
let storedAnswer = '';
let complex = '';
let complextrue = true;
let inverse = true;

window.onload = function () {
    document.getElementById('degButton').classList.add('selected-button');
};

function appendToResult(value) {
    if (currentInput !== '' && currentOperation==''&& nextInput=='' && complex=='') {
        currentInput += value;
        
    } else if(currentInput!='' && currentOperation!='' && complex =='' )
    {
        nextInput+=value;
        
    }
    else if(complex!='' && currentInput=='')
    {
        currentInput= complex + value;
        complex='';
        complextrue=false;
    }
    else if(complex!='' && currentInput!='')
    {
        nextInput= complex + value;
        complex='';
    }
    else
    {
        currentInput = value;
        
    }
    updateResult();
    
}



function clearResult() {
    storedAnswer = currentInput;
    currentInput = '';
    currentOperation='';
    nextInput='';
    complex='';
    updateResult();
}

function setOperation(operation) {
    currentOperation = operation;
    updateResult();
}

function calculateResult() {
    try {
        if(complextrue ==false)
        {
            if(nextInput=='')
            {
                const result = Math.sqrt(currentInput.substring(1));
                currentInput= result.toString();
                
            }
            else
            {
                const result = Math.sqrt(currentInput.substring(1));
                currentInput= result.toString();
                const result1 = Math.sqrt(nextInput.substring(1));
                nextInput= result1.toString();
                
            }
            const result = eval(currentInput + currentOperation + nextInput);
            currentInput = result.toString();
            currentOperation = '';
            nextInput = '';
            updateResult();
            
        }
        else
        {
            const result = eval(currentInput + currentOperation + nextInput);
            currentInput = result.toString();
            currentOperation = '';
            nextInput = '';
            updateResult();
        }
        
    } catch (error) {
        currentInput = 'Error';
        updateResult();
    }
}


function calculateSquareRoot() {
    try {
        if (currentOperation === '' && currentInput === '' && complex=='') {
            document.getElementById('result').value += '√';
            complex='√';
        } else{
            document.getElementById('result').value += '√';
            complex='√';
            
        } 
    } catch (error) {
        currentInput = 'Error';
        updateResult();
    }
}

function calculatePower(val) {
    try {
        setOperation('**');
        document.getElementById('result').value = currentInput + val;
        
    } catch (error) {
        currentInput = 'Error';
        updateResult();
    }
}

function calculatePercentage() {
    try {
        if(currentOperation == '')
        {
            const result = eval(currentInput) / 100;
            currentInput = result.toString();
        }
        else
        {
            const result = eval(nextInput)/100;
            nextInput = result.toString();
        }
        
        updateResult();
    } catch (error) {
        currentInput = 'Error';
        updateResult();
    }
}

function updateResult() {
    if(currentOperation=='**')
    {
        document.getElementById('result').value = currentInput + '^' + nextInput;
    }
    else
    {
        document.getElementById('result').value = currentInput + currentOperation + nextInput;
    }
}



//editing left
function calculateFactorial() {
    try {
        const n = parseInt(currentInput);
        
        if (isNaN(n) || n < 0 || n % 1 !== 0) {
            // Handle invalid input for factorial
            currentInput = 'Error';
            updateResult();
            return;
        }

        let factorialResult = 1;
        for (let i = 2; i <= n; i++) {
            factorialResult *= i;
        }
        document.getElementById('result').value +='!';
        currentInput = factorialResult.toString();
        complex = '';
        
    } catch (error) {
        currentInput = 'Error';
        updateResult();
    }
}
//editing left
function calculateTrigonometric(trigFunction) {
    try {
        const trigValue = Math[trigFunction](parseFloat(currentInput) * (Math.PI / 180)); // Convert degrees to radians
        currentInput = trigValue.toString();
        complex = '';
        updateResult();
    } catch (error) {
        currentInput = 'Error';
        updateResult();
    }
}
//editing left
function calculateNaturalLog() {
    try {
        const logValue = Math.log(parseFloat(currentInput));
        currentInput = logValue.toString();
        complex = '';
        updateResult();
    } catch (error) {
        currentInput = 'Error';
        updateResult();
    }
}

function setPi() {
    if(currentInput=='' && currentOperation=='')
    {
        currentInput= Math.PI;
        document.getElementById('result').value='\u03a0';
    }
    else if(currentInput!= '' && currentOperation=='')
    {
        currentOperation='*';
        nextInput=Math.PI;
        document.getElementById('result').value=currentInput+ '\u03a0';
    }
}
//funcationality for inverse sin cos tan is incomplete and hasnt initiated other functions
//like ln log root and power for the inverse.
function setInv() {
    try {
        if(inverse == false)
        {
            document.getElementById('sinCell').textContent = 'sin';
            document.getElementById('cosCell').textContent = 'cos';
            document.getElementById('tanCell').textContent = 'tan';
            inverse = true;
        }
        else
        {
            document.getElementById('sinCell').textContent = 'sin⁻¹';
            document.getElementById('cosCell').textContent = 'cos⁻¹';
            document.getElementById('tanCell').textContent = 'tan⁻¹';
            inverse =false;
        }
        
        
        updateResult();
    } catch (error) {
        currentInput = 'Error';
        updateResult();
    }
}

function setE() {
    try {
        if (currentInput === '' && currentOperation === '' && complex === '') {
            currentInput = Math.E.toString();
        } else if (currentInput !== '' && currentOperation === '') {
            currentOperation = '*';
            nextInput = Math.E.toString();
        }

        

        document.getElementById('result').value +='e';
        
    } catch (error) {
        currentInput = 'Error';
        updateResult();
    }
}

function setAns() {
    if(storedAnswer!='' && currentInput=='')
    {
        currentInput=storedAnswer;
        document.getElementById('result').value='Ans';

    }
}
//editing left
function calculateExp() {
    try {
        if (currentInput !== '' && currentOperation === '' && complex === '') {
            document.getElementById('result').value += 'E';
            complex = 'E';
            expPending = true;
        } else if (currentInput !== '' && currentOperation !== '' && complex === '') {
            document.getElementById('result').value += 'E';
            complex = 'E';
            expPending = true;
        } else {
            document.getElementById('result').value += '';
            
        }
        
    } catch (error) {
        currentInput = 'Error';
        updateResult();
    }
}
