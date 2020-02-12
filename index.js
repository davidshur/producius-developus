const axios = require('axios');
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your Github username?',
  },
  {
    type: 'list',
    name: 'color',
    message: 'What is your favorite color?',
    choices: ['Green', 'Blue', 'Pink', 'Red'],
    filter: function(val) {
      return val.toLowerCase();
    },
  },
];

const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, err => {
    if (err) throw err;
    console.log(`The user's PDF has been created and saved!`);

  })
}

const init = () => {
  inquirer.prompt(questions).then(answers => {
    console.log('Answers:');
    console.log(JSON.stringify(answers, null, ' '));
  });
}

init();
