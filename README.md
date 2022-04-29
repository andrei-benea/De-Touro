# detouro
Test library for verifying De-Touro KT and LE processes.

# How to fetch the code?
Always use master branch as it should only contain working tests!
<code>git clone https://...</code>

# Initialize project
Run the following commands:
<br><code>npm install nightwatch --save-dev
<br><code>npm install chromedriver --save-dev
<br><code>npm install @babel/core --save-dev
<br><code>npm install @babel/preset-env --save-dev

# Commands for running available tests
Creates all order types
<code>npm test -- --tag create</code>
Identifies first three LE orders
<code>npm test -- --tag identify</code>
Places bid on newest LE order (KTA)
<code>npm test -- --tag place-bid</code>
Places bid on newest LE order (DA)
<code>npm test -- --tag accept-da</code>
Places bid on newest LE order (BA)
<code>npm test -- --tag accept-ba</code>
Assigning newest 'to assign' order
<code>npm test -- --tag assign-kta</code>
Uploading proofs of performance on newest order
<code>npm test -- --tag process-kta</code>

# Create your first branch!
<code>git checkout -b your-branch-name</code>
