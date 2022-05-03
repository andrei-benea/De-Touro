# detouro
Test library for verifying De-Touro KT and LE processes.

## How to fetch the code?
Always use master branch as it should only contain working tests!
`git clone https://...`

## Initialize project
Run the following commands:

`npm install nightwatch --save-dev`

`npm install chromedriver --save-dev`

`npm install @babel/core --save-dev`

`npm install @babel/preset-env --save-dev`

`npm install dotenv --save`

## Setup .env file
For the async tests to work (successful login), you'll have to create a .env file in your root folder. That is where you'll have to store the required credentials

File contents:

`KT_USER="insert_your_KT_username_here"`

`KT_PASS="insert_your_KT_password_here"`

`LE_USER="insert_your_LE_username_here"`

`LE_PASS="insert_your_LE_password_here"`

## Commands for running available tests (async)
Because this setup is using environment variables, the command for running the test must include the '--env' argument.
Possible values are: 'kt' and 'le'

KT:
`npm test -- --env kt tests/createDaAsync.js`

LE:
`npm test -- --env le tests/acceptDaAsync.js`

## Commands for running available tests (old)
Like in the below example simply run test while passing the --tag argument. Applies to tests in /tests/old folder

`npm test -- --tag tagname`

## Create your first branch!
`git checkout -b new-branch-name`