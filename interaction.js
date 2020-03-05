console.log('INFO: Reading interaction.js');

console.log('INFO: Getting access to elements');

const inputElementRadius = document.getElementById("radius")
const inputElementResult = document.getElementById("result")

const calcVolume = () => { 
  
  const textRad = inputElementRadius.value;
  const Radius = parseFloat(textRad);

  const Result = (4/3) * Math.PI * (Radius * Radius * Radius);
  inputElementResult.innerHTML = "Result: " + Result;
}

const calcVolumeTest = (radius) => {

  return (4/3) * Math.PI * (radius * radius * radius);
}

console.log('INFO: Configuring event handlers');

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'calc') { calcVolume() }
})

console.log('INFO: Done loading, waiting for an event'); 