const inquirer = require("inquirer");

const copyFile = require("./src/copyFile");
const writeToFile = require("./src/writeToFile");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generatePage = require('./src/page-template');

let teamData = {
    teamMembers: []
};

const promptManager = teamData => {
    // If there's no 'teamMembers' array property, create one
    if (!teamData) {
        teamData.teamMembers = [];
    }
    return inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: 'What is the name of the manager? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('You need to enter a manager name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Provide an id for the manager (Required)',
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('You need to enter an id!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter the manager\'s email. (Required)',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('You need to enter an email address!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Enter the manager\'s office number. (Required)',
                validate: officeNumberInput => {
                    if (officeNumberInput) {
                        return true;
                    } else {
                        console.log('You need to enter an office number!');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                message: 'Add another team member?',
                name: 'member',
                choices: ['Engineer', 'Intern', 'Done']
            }
        ])
        .then(projectData => {
            let manager = new Manager(projectData.name, projectData.id, projectData.email, projectData.officeNumber);

            teamData.teamMembers.push(manager);
            switch (projectData.member) {
                case "Engineer":
                    return promptEngineer(teamData);
                    break;

                case "Intern":
                    return promptIntern(teamData);
                    break;

                default:
                    return teamData;
                    break;
            }
        });
};

const promptEngineer = teamData => {
    // If there's no 'teamMembers' array property, create one
    if (!teamData.teamMembers) {
        teamData.teamMembers = [];
    }
    return inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: 'What is the name of the engineer? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('You need to enter a manager name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Provide an id for the engineer (Required)',
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('You need to enter an id!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter the engineer\'s email. (Required)',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('You need to enter an email address!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter the engineer\'s GitHub account name. (Required)',
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('You need to enter a GitHub account name!');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                message: 'Add another team member?',
                name: 'member',
                choices: ['Engineer', 'Intern', 'Done']
            }
        ])
        .then(projectData => {
            let engineer = new Engineer(projectData.name, projectData.id, projectData.email, projectData.github);

            teamData.teamMembers.push(engineer);
            switch (projectData.member) {
                case "Engineer":
                    return promptEngineer(teamData);
                    break;

                case "Intern":
                    return promptIntern(teamData);
                    break;

                default:
                    return teamData;
                    break;
            }
        });
};

const promptIntern = teamData => {
    // If there's no 'teamMembers' array property, create one
    if (!teamData.teamMembers) {
        teamData.teamMembers = [];
    }
    return inquirer
        .prompt([{
                type: 'input',
                name: 'name',
                message: 'What is the name of the intern? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('You need to enter an intern\'s name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Provide an id for the intern (Required)',
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('You need to enter an id!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter the intern\'s email. (Required)',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('You need to enter an email address!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'Enter the intern\'s school. (Required)',
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log('You need to enter an email address!');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                message: 'Add another team member?',
                name: 'member',
                choices: ['Engineer', 'Intern', 'Done']
            }
        ])
        .then(projectData => {
            let manager = new Intern(projectData.name, projectData.id, projectData.email, projectData.school);

            teamData.teamMembers.push(manager);
            switch (projectData.member) {
                case "Engineer":
                    return promptEngineer(teamData);
                    break;

                case "Intern":
                    return promptIntern(teamData);
                    break;

                default:
                    return teamData;
                    break;
            }
        });
};

promptManager(teamData)
    .then(teamData => {
        return generatePage(teamData);
    })
    .then(pageHTML => {
        return writeToFile("./dist/index.html", pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
        return copyFile("./src/style.css", "./dist/style.css");
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    });