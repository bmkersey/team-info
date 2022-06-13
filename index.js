const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const {addEngineer, addIntern} = require('./util/addEmployee')
const generateTeam = require('./util/html-template');
const writeFile = require('./util/generate-page')
const teamArr = [];


const initializeApp = function(){
inquirer
    .prompt([

        {
            type: 'text',
            name: 'name',
            message: `What is the Manager's name?`
        },
        {
            type: 'text',
            name: 'id',
            message: `What is the Manager's id.`
        },
        {
            type: 'text',
            name: 'email',
            message: `What is the Manager's email.`
        }, 
        {
            type: 'text',
            name: 'office',
            message: `What is the Manager's office number.`
        },
        {
            type: 'list',
            message: `Would you like to add more members, or finish?`,
            name: 'action',
            choices: ['Add Engineer', 'Add Intern', 'Finish']
        }
    ])
    .then(({name, id, email, office, action}) => {
        const manager = new Manager(name, id, email, office);
        teamArr.push(manager);
        if (action === 'Add Engineer') {
            addEngineer(teamArr)
        } else if (action === 'Add Intern') {
            addIntern(teamArr)
        } else {
            let template = generateTeam(teamArr)
            return writeFile(template)
            
        }
    })
}

initializeApp();