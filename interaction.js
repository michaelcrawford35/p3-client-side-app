console.log('INFO: Reading interaction.js');

console.log('INFO: Getting access to elements');

const inputElementRadius = document.getElementById("radius")
const inputElementResult = document.getElementById("result")
const btnElement = document.getElementById("calc");

const calcVolume = (radius) => { return (4/3) * Math.PI * (radius * radius * radius);}

console.log('INFO: Configuring event handlers');

btnElement.onclick = async function ()
{
  const textRad = inputElementRadius.value;
  const textResult = inputElementResult.value;
  const Radius = parseFloat(textRad);

  const Result = calcVolume(Radius);
  inputElementResult.innerHTML = "Result: " + Result;
}

console.log('INFO: Done loading, waiting for an event'); 