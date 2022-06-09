// Kelvin Degree
const kelvin = 293;

// Celsius Degree
const celsius = kelvin - 273;

// Fahrenheit Degree
const Fahrenheit = Math.floor(celsius * (9 / 5) + 32);

console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);

// Newton Degree
const newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${newton} degrees Newton.`);
