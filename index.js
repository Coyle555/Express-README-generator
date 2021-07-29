// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs')
var markD = require('./utils/generateMarkdown.js');
const generateMarkdown = require('./utils/generateMarkdown.js');
const Choice = require('inquirer/lib/objects/choice');
// TODO: Create an array of questions for user input
let startApp = () => {
    inquirer 
    .prompt ([
    {
        message: 'What is the title of your project?',
        type: 'input',
        name: 'title'
    },
    {
        message: 'Type a description of your project.',
        type: 'input',
        name: 'desc'
    },
    {
        message: 'Type the installation instructions.',
        type: 'input',
        name: 'inst'
    },
    {
        message: 'Describe the usage information.',
        type: 'input',
        name: 'use'
    },
    {
        message: 'Enter the contribution guidelines.',
        type: 'input',
        name: 'cont'
    },
    {
        message: 'Describe the test instructions.',
        type: 'input',
        name: 'test'
    },
    {
        message: 'Please choose a license from the list.',
        type: 'list',
        name: 'license',
        choices: [
            'MIT',
            'GNU AGPLv3',
            'GNU GPLv3',
            'GNU LGPLv3',
            'Mozilla Public 2.0',
            'Apache 2.0',
            'Boost Software 1.0',
            'The Unlicense'
        ]
    },
    {
        message: 'Please enter your GitHub username',
        type: 'input',
        name: 'username'
    },
    {
        message: 'Please enter the email you would like to be contacted at.',
        type: 'input',
        name: 'email'
    },
])
.then(answers => {
    // Use user feedback for... whatever!!
    fs.appendFile(`README.md`, generateMarkdown(answers), (err) => 
    err ? console.error(err) : console.log('Added!'));
})
.catch((error) => {
    if (error.isTtyError) {
        console.error(error)
    } else {
        console.error(error)
    }
});
}
// TODO: Create a function to initialize app
let init = () => {
    startApp()
}
// Function call to initialize app
init();