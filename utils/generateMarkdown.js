// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
    return ``
  } else {
    return `[![License: ${license}](https://img.shields.io/static/v1?label=license&message=${license}&color=blue)](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    return `https://opensource.org/licenses/Apache-2.0`
  }
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  }
  if (license === 'ISC') {
    return `https://opensource.org/licenses/ISC`
  }
  if (license === 'GNU GPLv3') {
    return `https://www.gnu.org/licenses/gpl-3.0`
  }
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if(!license) {
    return ``
  } else {
    return `This project is covered by the ${license} license. Click on license badge for more information.`
  }
}

// TODO: Create a function to generate markdown for README
// create markdown practice - insert blank readme layout
// under license section, call: renderLicenseSection
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Licenses](#licenses)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ---

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributing

Contributors: ${data.contributors}

${data.contributing}

## Tests

${data.tests}

## Questions

Email: ${data.quesEmail}

[Visit my Github Profile](https://github.com/${data.quesGithub})
`;
}

module.exports = generateMarkdown;
