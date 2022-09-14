// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const util = require("util");
const generateREADME = require("./utils/generateMarkdown");
// const fileName = util.promisify(fs.writeToFile)
// const filename = `${README.md}`;

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
        message: "Enter the description for this project"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter the installation process, if any"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter the usage information for this project"
    },
    {
        type: "input",
        name: "contributors",
        message: "Enter the names of the individuals who contributed to this project"
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter contribution instructions for other users to follow"
    },
    {
        type: "input",
        name: "tests",
        message: "Enter instructions to use, and purpose of tests for this project"
    },
    // need github username -> link and email -> contact
    {
        type: "input",
        name: "quesEmail",
        message: "Please enter email for users to ask you questions for this project"
    },
    {
        type: "input",
        name: "quesGithub",
        message: "Please enter your github username to link your Github profile"
    },
    // make into list optoin
    {
        type: "list",
        name: "license",
        choices: [
            "Apache License 2.0",
            "MIT",
            "ISC",
            "GNU GPLv3"
        ]
    }

];

// TODO: Create a function to write README file
// function generates readme based on user-input answers
// write readme, console.log success/err
function writeToFile(fileName, data) {
    const filename = `${README.md}`;

    // fs.writeToFile(path, data, callback =>)
    fs.writeFile(filename, (data), (err) =>
    err ? console.log(err) : console.log('README successfully generated!'));
}

// TODO: Create a function to initialize app
//  use: generateREADME(answers)
// .then 
// console.log err
function init() {
    return inquirer.prompt(questions);
}


// Function call to initialize app
init();
