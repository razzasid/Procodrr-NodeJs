const fs = require("fs");

const fileData = fs.readFileSync("./.env").toString();

fileData.split(/\r?\n/).forEach((variable) => {
  const [key, value] = variable.split("=");
  process.env[key] = value;
});

setInterval(() => {
  const a = process.env;
  console.log("hii");
}, 1000);

const enviromentVariables = process.env;
console.log(enviromentVariables);


//there are three types of enviroment varibles that is system variables, user variables and process variables.

//we can set enviroment variables through export variables in bashrc file
//ex: export var="raza"
//also if we want to set enviroment variable directly through terminal we can use setx VARIABLE_NAME "Raza /M"
