// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const generateREADME = require("./utils/generateMarkdown");
// const fileName = util.promisify(fs.writeToFile)

// TODO: Create an array of questions for user input
// change to function use: questions = () => return inquirer .prompt([questions array])
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title for this README.md?"
    }
    // add sections: description, table of contents, installation, usage, license, contributing, tests, questions
];

// TODO: Create a function to write README file
// function generates readme based on user-input answers
// write readme, console.log success/err
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//  use: generateREADME(answers)
// .then 
// console.log err
function init() {}

// Function call to initialize app
init();
