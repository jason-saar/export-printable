// Sends Get Request

const response = await fetch("http://localhost:3000");    // GET REQUEST
const text = await response.text();     // read the text

console.log(text);