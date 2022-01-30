const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const output = path.resolve(__dirname, "output", "team.html");

const renderTeam = require("./lib/generateHTML");
const { exit } = require('process');

const teamMembers = [];

const membersID = [];


function start(){
    console.log('Welcome to your company employee roaster');

    inquirer.prompt([
        {
            type: 'list',
            name:'createTeam',
            message:'what would you like to do today?',
            choices:['create a team member', 'exit']

        }

    ]).then(choice => {
        switch (choice.createTeam) {
            case 'create a team member':
                createTeamMember();
                break;
            case 'exit':
                process.exit();
                break;
            default:
                break;
        }

    })

    function createTeamMember(){

    }

    function createManager(){
        inquirer.prompt([
            {
                type:'input',
                name:'managerName',
                message:'Whatis the manager name?'
            },
            {
                type:'input',
                name:'managerID',
                message:'Whatis the manager id?'
            }
        ]).then(data => {
            let manager = new Manager(data.managerName, data.managerID);

            teamMembers.push(manager);
            membersID.push(data.managerID)
            createTeamMember()
        })
    }
}

start()