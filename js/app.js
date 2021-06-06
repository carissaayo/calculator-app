const body = document.body;
const toggleBalls = body.querySelectorAll(".ball");
const toggleCon = body.querySelector("#toggle-con");
const calculator = body.querySelector('.calculator')
// all keys plus symbols
const keys = body.querySelector(".calculator-con");
const output = body.querySelector("#result > div > p");



// toggle func
toggleBalls.forEach((ball) => {
  ball.addEventListener("click", (e) => {
    ball.classList.remove("show");
    const ballId = ball.dataset.theme;
    const theme = e.currentTarget;
    const id = theme.dataset.theme;
    body.classList = "";
    body.classList.add(id);

    if (id === "theme1") {
      toggleCon.classList = "";
      toggleCon.classList.add("show1");
    } else if (id === "theme2") {
      toggleCon.classList = "";
      toggleCon.classList.add("show2");
    } else {
      toggleCon.classList = "";
      toggleCon.classList.add("show3");
    }
  });
});


keys.addEventListener('click', e=>{
  const key = e.target;
  const keyValue = key.textContent;
  const outputValue = output.textContent;
const { type } = key.dataset;
const {previousKeyType} = calculator.dataset;


  // if the key is a number key
  if (type === "number") {
        if (outputValue.includes(".") && key.classList.contains("decimal"))
          return;

    if (outputValue === "0") {
      output.textContent = keyValue;
    } 
    else if(previousKeyType === 'operator'){
      output.textContent = keyValue;
    }
    else {
      output.textContent = outputValue + keyValue;
    }
   
  
   
  }
  if (type === "operator") {
  const  operatorKeys = keys.querySelectorAll(`[data-type="operator"]`)
  operatorKeys.forEach(el=>el.dataset)


  calculator.dataset.firstNumber = outputValue;
  calculator.dataset.operator = key.dataset.key
  }
  // for calculating
  if(type=== 'equal'){
const firstNumber=parseInt(calculator.dataset.firstNumber);
const operator = calculator.dataset.operator;

const secondNumber = parseInt(outputValue);
let result='';
if(operator === 'plus')result = firstNumber +secondNumber
if (operator === "minus") result = firstNumber - secondNumber;
if (operator === "product") result = firstNumber * secondNumber;
if (operator === "division") result = firstNumber / secondNumber;

 output.textContent = result
  }

// for reset key
  if(type==='reset') output.textContent = 0;

  // for delete key
  if(type==='delete'){
    output.textContent=outputValue.slice(0,-1);
      if (output.textContent === "") output.textContent =0;
  }
  
 calculator.dataset.previousKeyType = type;
})
