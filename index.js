// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
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
function writeToFile(data) {

    // fs.writeToFile(path, data, callback =>), console log error if not generated
    fs.writeFile('README.md', data, err =>
    err ? console.log(err) : console.log('README successfully generated!'));
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(data => {
    return generateREADME(data);
})
.then(data => {
    return writeToFile(data);
})
.catch(err => {
    console.log(err);
});