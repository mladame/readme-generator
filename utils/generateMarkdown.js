// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!data.license) {
    return ``
  } else {
    return `[![License: ${data.license}(https://img.shields.io/static/v1?label=license&message=${data.license}&color=blue)](${renderLicenseLink(data.license)})`
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (data.license === 'Apache License 2.0') {
    return `https://opensource.org/licenses/Apache-2.0`
  }
  if (data.license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  }
  if (data.license === 'ISC') {
    return `https://opensource.org/licenses/ISC`
  }
  if (data.license === 'GNU GPLv3') {
    return `https://www.gnu.org/licenses/gpl-3.0`
  }
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if(!data.license) {
    return ``
  } else {
    return `This project is covered by the ${data.license} license. Click on license badge for more information.`
  }
}

// TODO: Create a function to generate markdown for README
// create markdown practice - insert blank readme layout
// under license section, call: renderLicenseSection
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
