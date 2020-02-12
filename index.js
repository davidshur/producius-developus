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

}

const init = () => {

}

init();
