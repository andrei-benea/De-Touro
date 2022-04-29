# detouro
Test library for verifying De-Touro KT and LE processes.

<h1>How to fetch the code?
<p>Always use master branch as it should only contain working tests!
<code>git clone https://...
<h1>Initialize project
<p>Run the following commands:
<p><code>npm install nightwatch --save-dev
<br><code>npm install chromedriver --save-dev
<br><code>npm install @babel/core --save-dev
<br><code>npm install @babel/preset-env --save-dev
<h1>Commands for running available tests
<p>Creates all order types
<code>npm test -- --tag create
<p>Identifies first three LE orders
<code>npm test -- --tag identify
<p>Places bid on newest LE order (KTA)
<code>npm test -- --tag place-bid
<p>Places bid on newest LE order (DA)
<code>npm test -- --tag accept-da
<p>Places bid on newest LE order (BA)
<code>npm test -- --tag accept-ba
<p>Assigning newest 'to assign' order
<code>npm test -- --tag assign-kta
<p>Uploading proofs of performance on newest order
<code>npm test -- --tag process-kta
<h1>Create your first branch!
<p><code>git checkout -b your-branch-name
