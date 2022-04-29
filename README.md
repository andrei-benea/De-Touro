# detouro
Test library for verifying De-Touro KT and LE processes.

<h1>
How to fetch the code?
</h1>
<p>
Always use master branch as it should only contain working tests!
<code>git clone https://...</code>
</p>
<h1>
Initialize project
</h1>
<p>
<code>npm install nightwatch --save-dev</code>
<code>npm install chromedriver --save-dev</code>
<code>npm install @babel/core --save-dev</code>
<code>npm install @babel/preset-env --save-dev</code>
<code>npm install @babel/register --save-dev</code>
<code>npm install @babel/plugin-transform-arrow-functions --save-dev</code>
<code>npm install babel-plugin-add-module-exports --save-dev</code>
</p>
<h1>
Commands for running available tests
</h1>
<p>
Creates all order types
<code>npm test -- --tag create</code>
</p>
<p>
Identifies first three LE orders
<code>npm test -- --tag identify</code>
</p>
<p>
Places bid on newest LE order (KTA)
<code>npm test -- --tag place-bid</code>
</p>
<p>
Places bid on newest LE order (DA)
<code>npm test -- --tag accept-da/code>
</p>
<p>
Places bid on newest LE order (BA)
<code>npm test -- --tag accept-ba</code>
</p>
<p>
Assigning newest 'to assign' order
<code>npm test -- --tag assign-kta</code>
</p>
<p>
Uploading proofs of performance on newest order
<code>npm test -- --tag process-kta</code>
</p>
<h1>
Create your first branch!
</h1>
<p>
<code>git checkout -b your-branch-name</code>
