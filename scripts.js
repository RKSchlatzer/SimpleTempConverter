

/* ***** Original Code Snippet ***** Set a temp as a variable (#) - Asssume Farenheit
var farenheit = 54;

//Calculate the temp conversion to Celsius
var celsius =  ((farenheit-32)*(5/9));

//Display output in the Console
console.log (celsius + " degrees celsius convereted from " + farenheit + " degrees fareheit");
*/


function tempConvert(degrees, type) {
  if (type === "F") {
    var celsius = ((degrees-32)*(5/9));
  console.log (celsius + " degrees celsius converted from " + degrees + " degrees farenheit");
} else if (type === "C") {
   var farenheit = ((degrees*9/5)+32);
    console.log (farenheit + " degrees fareneheit converted from " + degrees + " degrees celsius");
}
}

tempConvert(20, "F");
