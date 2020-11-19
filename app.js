const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

const team = [];
let employee = [];

const questions = {
  message: "Please select one of the following?",
  type: "list",
  name: "role",
  choices: ["Add Manager", "Add Engineer", "Add Intern", "Exit"],
};

const manager = {
  message: "Please provide the manager's office number?",
  type: "input",
  name: "office",
};

const engineer = {
  message: "Please enter the engineer's GitHub username?",
  type: "input",
  name: "github",
};

const intern = {
  message: "Please enter the intern's school name?",
  type: "input",
  name: "school",
};

function start() {
  employee = [
    {
      message: "Enter the employee's first & last name?",
      type: "input",
      name: "name",
    },
    {
      message: "Provide an ID number for the employee?",
      type: "input",
      name: "id",
    },
    {
      message: "What is the employee's email address?",
      type: "input",
      name: "email",
    },
  ];

  inquirer.prompt(questions).then((response) => {
    switch (response.role) {
      case "Add Manager":
        getManager();
        break;
      case "Add Engineer":
        getEngineer();
        break;
      case "Add Intern":
        getIntern();
        break;
      case "Exit":
        generateTeam();
        break;
    }
  });
}


