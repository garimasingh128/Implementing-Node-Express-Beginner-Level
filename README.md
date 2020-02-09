# Implementing-Angular-and-Node
This is the repo which consists of all the codes I tried and wrote while learning Node.js and Angular.
Fast, unopinionated, minimalist web framework for node.

NPM Version NPM Downloads Linux Build Windows Build Test Coverage

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
Installation
This is a Node.js module available through the npm registry.

Before installing, download and install Node.js. Node.js 0.10 or higher is required.

Installation is done using the npm install command:

$ npm install express
Follow our installing guide for more information.

Features
Robust routing
Focus on high performance
Super-high test coverage
HTTP helpers (redirection, caching, etc)
View system supporting 14+ template engines
Content negotiation
Executable for generating applications quickly
Docs & Community
Website and Documentation - [website repo]
#express on freenode IRC
GitHub Organization for Official Middleware & Modules
Visit the Wiki
Google Group for discussion
Gitter for support and discussion
PROTIP Be sure to read Migrating from 3.x to 4.x as well as New features in 4.x.

Security Issues
If you discover a security vulnerability in Express, please see Security Policies and Procedures.

Quick Start
The quickest way to get started with express is to utilize the executable express(1) to generate an application as shown below:

Install the executable. The executable's major version will match Express's:

$ npm install -g express-generator@4
Create the app:

$ express /tmp/foo && cd /tmp/foo
Install dependencies:

$ npm install
Start the server:

$ npm start
View the website at: http://localhost:3000

Philosophy
The Express philosophy is to provide small, robust tooling for HTTP servers, making it a great solution for single page applications, web sites, hybrids, or public HTTP APIs.

Express does not force you to use any specific ORM or template engine. With support for over 14 template engines via Consolidate.js, you can quickly craft your perfect framework.

Examples
To view the examples, clone the Express repo and install the dependencies:

$ git clone git://github.com/expressjs/express.git --depth 1
$ cd express
$ npm install
Then run whichever example you want:

$ node examples/content-negotiation
Tests
To run the test suite, first install the dependencies, then run npm test:

$ npm install
$ npm test
