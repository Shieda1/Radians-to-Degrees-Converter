// https://www.omnicalculator.com/conversion/radians-to-degrees

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const degreesRadio = document.getElementById('degreesRadio');
const radiansRadio = document.getElementById('radiansRadio');

let degrees;
let radians = v; 

// labels of the inpust
const variable = document.getElementById('variable');

degreesRadio.addEventListener('click', function() {
  variable.textContent = 'Radians';
  radians = v;
  result.textContent = '';
});

radiansRadio.addEventListener('click', function() {
  variable.textContent = 'Degrees';
  degrees = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(degreesRadio.checked)
    result.textContent = `Degrees = ${computedegrees().toFixed(5)}`;

  else if(radiansRadio.checked)
    result.textContent = `Radians = ${computeradians().toFixed(5)}`;
})

// calculation

function computedegrees() {
  return Number(radians.value) * 57.2958;
}

function computeradians() {
  return Number(degrees.value) / 57.2958;
}