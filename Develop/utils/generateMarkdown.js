// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(sel) {
  if (sel.license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (sel.license === 'GNU AGPLv3') {
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  } else if (sel.license === 'GNU GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (sel.license === 'GNU LGPLv3') {
    return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  } else if (sel.license === 'Mozilla Public 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if (sel.license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (sel.license === 'Boost Software 1.0') {
    return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else if (sel.license === 'The Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  }
}

// need MIT, GNU GPL3, 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}                               ${renderLicenseLink(data)}
  ## Description
  ${data.desc}\n
  ## Installation
  ${data.inst}\n
  ## Usage
  ${data.use}\n
  ## Contributing
  ${data.cont}\n
  ## Test
  ${data.test}\n
  ## License
  The code used in this project is licensed under the ${data.license} license(s).

  ## Questions
  Github: https://www.github.com/${data.username.toLowerCase().trim().split(' ').join('')}\n
  Email: ${data.email.toLowerCase().trim().split(' ').join('')}\n
  Feel free to email me before 9 p.m. M-F and I will try my best to get back to you ASAP.`;
}

module.exports = generateMarkdown;

