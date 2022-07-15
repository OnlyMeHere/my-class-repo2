constr inquirer = require('inquirer');
const fs = require('fs');

inquirer 
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name:   'name'
        },
        {
            type: 'input',
            message: 'What language do you',
            names: 'responceLang',
        },
        {
            type: 'input',
            message: 'What is your preferred method of communicating',
            names: 'responceComm'
        },
        
    ])
    .then((response) => {
        console.log(response)

    })