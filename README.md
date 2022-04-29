# detouro
Test library for verifying De-Touro KT and LE processes.

# How to fetch the code?
Always use master branch as it should only contain working tests!
`git clone https://...`

# Initialize project
Run the following commands:

`npm install nightwatch --save-dev`

`npm install chromedriver --save-dev`

`npm install @babel/core --save-dev`

`npm install @babel/preset-env --save-dev`

# Commands for running available tests
Creates all order types
`npm test -- --tag create`

Identifies first three LE orders
`npm test -- --tag identify`

Places bid on newest LE order (KTA)
`npm test -- --tag place-bid`

Places bid on newest LE order (DA)
`npm test -- --tag accept-da`

Places bid on newest LE order (BA)
`npm test -- --tag accept-ba`

Assigning newest 'to assign' order
`npm test -- --tag assign-kta`

Uploading proofs of performance on newest order
`npm test -- --tag process-kta`

# Create your first branch!
`git checkout -b your-branch-name`