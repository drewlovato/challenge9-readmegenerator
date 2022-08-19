const inquirer = require("inquirer");
const fs = require("fs");

const buildHTML = ({
  title,
  description,
  install,
  usage,
  contribution,
  test,
  liscence,
  git,
  email,
}) => `
  # ${title}\n
  #Description
  ** ${description}\n
  #Installation
  ** ${install}\n
  #Usage
  ** ${usage}\n
  #Contribution
  ** ${contribution}\n
  #Testing
  ** ${test}\n
  #Liscencing
  ** ${liscence}\n
  #QUESTIONS\n
  *GitHub: ${git}\n
  *Email: ${email}`;

inquirer
  .prompt([
    {
      type: "input",
      message: "Please enter the project Title",
      name: "title",
      // this checks if the user enters a title into prompt
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter a Title to continue";
        }
      },
    },
    {
      type: "input",
      message: "What is your project about?",
      name: "description",
      // this checks if the user enters a title into prompt
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter a description to continue";
        }
      },
    },
    {
      type: "input",
      message: "Are there any instructions to install your project?",
      name: "install",
      // this checks if the user enters a title into prompt
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter instructions to continue. If there are none please enter: N/A";
        }
      },
    },
    {
      type: "input",
      message: "What are you using this project for?",
      name: "usage",
      // this checks if the user enters a title into prompt
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter your contributions to continue";
        }
      },
    },
    {
      type: "input",
      message: "What contributions did you make to this project?",
      name: "contribution",
      // this checks if the user enters a title into prompt
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter your contributions to continue";
        }
      },
    },
    {
      type: "input",
      message: "Are there any test instructions for this project?",
      name: "test",
      // this checks if the user enters a title into prompt
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter your test instructions to continue. If there are none please enter: N/A";
        }
      },
    },
    {
      type: "list",
      message: "What liscense did you use for your project?",
      name: "liscence",
      choices: [
        "The GPL Liscence",
        "The MIT Liscence",
        "Apache Liscence",
        "The GNU Liscence",
        "N/A",
      ],
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please choose a liscence to continue. If you did not use a liscence please choose N/A";
        }
      },
    },
    {
      type: "input",
      message: "Please enter your Github Username:",
      name: "git",
      // this checks if the user enters a title into prompt
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter your Github Username to continue.";
        }
      },
    },
    {
      type: "input",
      message: "Please enter your Email:",
      name: "email",
      // this checks if the user enters a title into prompt
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please enter your email to continue.";
        }
      },
    },
  ])
  .then((answers) => {
    fs.writeFile("./README.md", buildHTML(answers), (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });
