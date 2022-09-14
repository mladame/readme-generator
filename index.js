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
    },
    {
        type: "input",
        name: "description",
        message: "What is the description for this project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What is the title for this README.md?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the title for this README.md?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What is the title for this README.md?"
    },
    {
        type: "input",
        name: "tests",
        message: "What is the title for this README.md?"
    },
    // need github username -> link and email -> contact
    {
        type: "input",
        name: "questions",
        message: "What is the title for this README.md?"
    },
    // make into list optoin
    {
        type: "input",
        name: "license",
        message: "What is the title for this README.md?"
    }

    // add sections: description, installation, usage, license, contributing, tests, questions(enter github username), email,
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
