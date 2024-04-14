#! usr/bin/env node

import inquirer from "inquirer";

const user = await inquirer.prompt([
  {
    message: "Enter Your any first number",
    type: "number",
    name: "first",
  },
  {
    message: "Enter Your any second number",
    type: "number",
    name: "second",
  },
  {
    message: "Enter Your any operator",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
if (user.operator == "Addition") console.log(user.first + user.second);
else if (user.operator == "Subtraction") console.log(user.first - user.second);
else if (user.operator == "Multiplication")
  console.log(user.first * user.second);
else if (user.operator == "Division") console.log(user.first / user.second);
else {
  console.log("Invalid Number");
}
console.log("THE END")