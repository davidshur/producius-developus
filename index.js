const axios = require('axios');
const pdf = require('html-pdf');
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML.js');

const options = {format: 'A4'};

const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your Github username?',
    filter: val => {
      return val.toLowerCase();
    },
  },
  {
    type: 'list',
    name: 'color',
    message: 'What is your favorite color?',
    choices: ['Green', 'Blue', 'Pink', 'Red'],
    filter: val => {
      return val.toLowerCase();
    },
  },
];

const writeToFile = (fileName, data, path) => {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
    console.log(`The user's HTML has been created and saved!`);
  });
}

const init = () => {
  inquirer.prompt(questions).then(answers => {
    axios.get(`https://api.github.com/users/${answers.username}`).then(user => {
      writeToFile(`${answers.username}.html`, generateHTML(answers, user.data), `./${answers.username}.pdf`);
      pdf.create(generateHTML(answers, user.data), options).toFile(`./${answers.username}.pdf`, function(err, res) {
        if (err) return console.log(err);
        console.log(res);
      });
    });
  });
}

init();
