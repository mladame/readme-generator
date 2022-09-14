// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// https://img.shields.io/static/v1?label=license&message=${data.license}&color=<COLOR>
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// find links to license info, link attaches if license name matches
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// enter markdown for license
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// create markdown practice - insert blank readme layout
// under license section, call: renderLicenseSection
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
