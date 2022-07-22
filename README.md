# De-Touro
Test library for verifying De-Touro KT and LE processes.

## How to fetch the code?
Always use master branch as it should only contain working tests!
`git clone https://...`

## Initialize project
Make sure you have NodeJs and Visual Studio Code properly installed on your machine.
Open the folder where you cloned the project using VSC and run the following commands:

`npm install nightwatch --save-dev`

`npm install chromedriver --save-dev`

`npm install @babel/core --save-dev`

`npm install @babel/preset-env --save-dev`

`npm install dotenv --save`

## Running your first test

Run the following command in order to verify the complete DA process:

`npm test tests/e2eDaTest.js`

Commands for running all DeTouro tests will be added here, keep checking for updates.

## Create your first branch!
If you want to contribute, run the following command to create your first branch:

`git checkout -b new-branch-name`

## Setup .env file (obsolete)
For the async tests to work (successful login), you'll have to create a .env file in your root folder. That is where you'll have to store the required credentials

File contents:

`KT_USER="insert_your_KT_username_here"`

`KT_PASS="insert_your_KT_password_here"`

`LE_USER="insert_your_LE_username_here"`

`LE_PASS="insert_your_LE_password_here"`

## Commands for running available async tests (obsolete)
Because this setup is using environment variables, the command for running the test must include the '--env' argument.
Possible values are: 'kt' and 'le'

KT:
`npm test -- --env kt tests/createDaAsync.js`

LE:
`npm test -- --env le tests/placeBidAsync.js`

### Test scenarios (obsolete)
A list of commands that trigger corresponding tests. Currently they will have to be executed in the same order as presented here.

#### KTA (obsolete)
Save, publish, bid, assign, perform.

`npm test -- --env kt tests/createKtaAsync.js`

`npm test -- --env le tests/placeBidAsync.js`

`npm test -- --env kt tests/assignKtaAsync.js`

`npm test -- --env le tests/performRidesAsync.js`

#### DA (obsolete)
Save, publish, bid, assign, perform.

`npm test -- --env kt tests/createDaAsync.js`

`npm test -- --env le tests/placeBidAsync.js`

`npm test -- --env kt tests/assignKtaAsync.js`

`npm test -- --env le tests/performRidesAsync.js`

#### BA (obsolete)
Save, publish, accept, assign, perform.

`npm test -- --env kt tests/createBaAsync.js`

`npm test -- --env le tests/placeBidAsync.js`

`npm test -- --env kt tests/assignKtaAsync.js`

`npm test -- --env le tests/performRidesAsync.js`

## Commands for running older tests (obsolete)
Like in the below example simply run test while passing the --tag argument. Applies to tests in /tests/old folder

`npm test -- --tag tagname`