# De-Touro
Test library for verifying De-Touro KT and LE processes.

## How to fetch the code?
Always use master branch as it should only contain working tests!
`git clone https://...`

In case you have already cloned the master branch frequently use `git pull` to check for updates!

## Initialize project
Make sure you have NodeJs and Visual Studio Code properly installed on your machine.
Open the folder where you cloned the project using VSC and run the following commands:

`npm install nightwatch --save-dev`

`npm install chromedriver --save-dev`

`npm install @babel/core --save-dev`

`npm install @babel/preset-env --save-dev`

`npm install dotenv --save`

'dotenv' package no longer required due to refactorization.

## Running your first test
1. Create a `tests_input/credentials` folder
2. Create a new file called 'testAccount' that has the following contents:

```
export const credentials = {
    kt: {
        firstName: 'yourfirstname',
        lastName: 'yourlastname',
        userName: 'yourusername',
        passWord: 'yourpassword'
    },
    le: {
        userName: 'yourusername',
        passWord: 'yourpassword'
    }
};
```

3. Run the following commands to start up e2e tests that verify saving, publishing, bidding, assigning and performing rides on all De-Touro order types:

`npm test tests/e2eKtaTest.js`

`npm test tests/e2eDaTest.js`

`npm test tests/e2eBaTest.js`

4. Commands for running all DeTouro tests will be added here, keep checking for updates.

## Create your first branch!
If you want to contribute, run the following command to create your first branch:

`git checkout -b new-branch-name`