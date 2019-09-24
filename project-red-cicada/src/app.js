const a = [1,2];
const b = [3,4];
const es6Array = [...a, ...b];

alert('Constructed array with ES6 spread operator: ' + JSON.stringify(es6Array));
