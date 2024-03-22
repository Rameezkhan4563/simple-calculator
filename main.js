#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//Conditional Statements
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Plese select valid operator");
}
// How To Uplod Your Package/Project on NPM:
// 1. First SHABANG CODE insert karenge. #! /usr/bin/env node
// 2. Then package.json ki file me “bin”: “file ka naam.js” add karege type k neechay.
// 3. Package ka name unique likhenge.
// 4. tsc run karenge
// 5. (One time) NPM pe signup karenge.
// 6. Then us project k terminal me likhenge “npm login”
// 7. Then us project k terminal me likhenge “npm publish”
// 8. phir published package ko run karne k liye Command Promt me likhenge “npx project ka naam”
