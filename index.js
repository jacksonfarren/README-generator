// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fse = require('fs-extra');
const validator = require('email-validator');

// Markdown file
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    // Project title
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:',
        validate: val => {
            if (val) {
                return true;
            } else {
                return 'Project title is required. Please enter your project title'
            }
        }
    },

    // Project Description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:',
        validate: val => {
            if (val) {
                return true;
            } else {
                return 'Project description is required. Please enter your poject description'
            }
        }
    },

    // Installation instructions
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions of project:',
        validate: val => {
            if (val) {
                return true;
            } else {
                return 'Must provide installation instructions. Please enter the installation instructions for project';
            }
        }
    },

    // Usage Information
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information for the project:',
        validate: val => {
            if (val) {
                return true;
            } else {
                return 'Usage information is required. Please enter the usage information for the project'
            }
        }
    },

    // Contribution Guidelines
    {
        type: 'input',
        name: 'guidelines',
        message: 'Who are the contributerss to the project?',
        validate: val => {
            if (val) {
                return true
            } else {
                return 'Contributions are required. Please enter the contributions for the project'
            }
        }
    },

    // Test Instructions
    {
        type: 'input',
        name: 'instructions',
        message: 'What are the testing instructions for your project?',
        validate: val => {
            if (val) {
                return true
            } else {
                return 'Testing information is required. Please enter the testing instruction for your project'
            }
        }
    },

    // Licensing
    {
        type: 'list',
        name: 'license',
        message: 'Choose how you want to license your project through the list of options:',
        choices: ["Apache", "GNU", "MIT", "Boost Software", "Eclipse"],
        validate: val => {
            if (val) {
                return true
            } else {
                return 'Must select one of the licensing options'
            }
        }
    },

    // GitHub Username
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
        validate: val => {
            if (val) {
                return true
            } else {
                return 'GitHub username is required. Please enter your Github username'
            }
        }
    },

    // Repo name for license
    {
        type: 'input',
        name: 'repo',
        message: 'What is the name of your project repo?',
        validate: val => {
            if (val) {
                return true
            } else {
                return 'Repo name is required. Please enter the repository name for your project'
            }
        }
    },

    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        validate: val => {
            if (validator.validate(val)) {
                return true
            } else {
                return 'You must enter a valid email address'
            }
        }
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fse.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('README has been successfully generated')
        }
    })
}

// function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        writeToFile("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
