const inquirer = require("inquirer");
const fs = require("fs");

const buildHTML = ({
  title,
  description,
  install,
  usage,
  contribution,
  test,
  license,
  git,
  email,
}) => `
# ${title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

### Description\n
  - ${description}\n

### Installation\n
  - ${install}\n

### Usage\n
  - ${usage}\n

### Contribution\n
  - ${contribution}\n

### Tests\n
  - ${test}\n

### License\n
  - ${license}\n

### Questions\n
  - GitHub: ${git}\n
  - Email: ${email}`;

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
      name: "tests",
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
      name: "license",
      choices: [
        "The GPL License",
        "The MIT License",
        "Apache License",
        "The GNU License",
        "N/A",
      ],
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please choose a License to continue. If you did not use a License please choose N/A";
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

// render badge for license
// function renderLicenseBadge(license) {
//   if(license !== 'no license used'){
//     return `![badge](https://img.shields.io/badge/license-${license}-blue )`;
//   } else{
//     return ' ';
//   }
// };
