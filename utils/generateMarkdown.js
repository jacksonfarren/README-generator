// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``
  } else {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';

  switch(license) {
    case "Apache":
      link = "https://www.apache.org/licenses/LICENSE-2.0";
      break;
    case "GNU":
      link = "https://www.gnu.org/licenses/gpl-3.0.en.html"
      break;
    case "MIT":
      link = "https://mit-license.org/"
      break;
    case "Boost Software":
      link = "https://www.boost.org/users/license.html"
      break;
    case "Eclipse":
      link = "https://www.eclipse.org/legal/epl-2.0/"
      break;
  }

  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return `## License
    This project is licensed under the ${license}. To get more information, visit ${renderLicenseLink(license)}`
  } else {
    return "";
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution Guidelines](#guidelines)
  - [Test Instructions](#testing)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.guidelines}

  ## Testing
  ${data.instructions}

  ${renderLicenseSection(data.license)}

  ## Questions
  Check me out on GitHub: [${data.username}](https://github.com/${data.username})</br>
  Email me: ${data.email}
`;
}

module.exports = generateMarkdown;
