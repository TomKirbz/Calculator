let value = 0;
let store = null;
let input = null;
let calcFunction = "";


function inputNumber (button) {
  if (value == 0) {
    input = parseInt(button.innerText);
    value = input;
    updateAnswerBox (value);
  } else if (value != 0) {
    input = button.innerText;
    let newValue = value.toString() + input;
    value = parseInt(newValue);
    updateAnswerBox (newValue);
  }
}

function equals () {
  if (calcFunction == "add" && store != null) {
    let result = store + value;
    value = result; 
    updateAnswerBox (result);
    input = null;
    store = null;
    calcFunction = "";
  }

  if (calcFunction == "multiply" && store != null) {
    let result = store * value;
    value = result; 
    updateAnswerBox (result);
    input = null;
    store = null;
    calcFunction = "";
  }

  if (calcFunction == "subtract" && store != null) {
    let result = store - value;
    value = result; 
    updateAnswerBox (result);
    input = null;
    store = null;
    calcFunction = "";
  }

  if (calcFunction == "divide" && store != null) {
    let result = store / value;
    value = result; 
    updateAnswerBox (result);
    input = null;
    store = null;
    calcFunction = "";
  }
}


function updateAnswerBox (num) {
  const answerBox = document.getElementById ("answerbox");
  answerBox.innerText = num;
}

function addNumber () {
 calcFunction = "add";
 store = value;
 value = 0;
 input = null;
}

function multiplyNumber () {
  calcFunction = "multiply";
  store = value;
  value = 0;
  input = null;
}

function subtractNumber () {
  calcFunction = "subtract";
  store = value;
  value = 0;
  input = null;
}
function divideNumber () {
  calcFunction = "divide";
  store = value;
  value = 0;
  input = null;
}

function clearValue () {
  input = null;
  value = 0;
  calcFunction = "";
  updateAnswerBox (value);
}