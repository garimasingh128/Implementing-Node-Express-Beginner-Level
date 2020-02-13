# Implementing-Express-and-Node
### This is the repo which consists of all the codes I tried and wrote while learning Node.js and Express.
Fast, unopinionated, minimalist web framework for node.

NPM Version NPM Downloads Linux Build Windows Build Test Coverage
```
const express = require('express')
const app = express()
```
```
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.listen(3000)
```

Installation
This is a Node.js module available through the npm registry.

Before installing, download and install Node.js. Node.js 0.10 or higher is required.

Installation is done using the npm install command:
```
$ npm install express
```
Follow our installing guide for more information.

* Features
  * Robust routing
  * Focus on high performance
  * Super-high test coverage
  * HTTP helpers (redirection, caching, etc)
  * View system supporting 14+ template engines
  * Content negotiation
  * Executable for generating applications quickly

## Docs & Community

Website and Documentation - [website repo]

# express on freenode IRC
GitHub Organization for Official Middleware & Modules
Visit the Wiki
Google Group for discussion
Gitter for support and discussion
PROTIP Be sure to read Migrating from 3.x to 4.x as well as New features in 4.x.

## Security Issues
If you discover a security vulnerability in Express, please see Security Policies and Procedures.

## Quick Start
The quickest way to get started with express is to utilize the executable express(1) to generate an application as shown below:

Install the executable. The executable's major version will match Express's:
```
$ npm install -g express-generator@4
Create the app:

$ express /tmp/foo && cd /tmp/foo
Install dependencies:

$ npm install
Start the server:

$ npm start
View the website at: http://localhost:3000
```
## Philosophy
The Express philosophy is to provide small, robust tooling for HTTP servers, making it a great solution for single page applications, web sites, hybrids, or public HTTP APIs.

* Express does not force you to use any specific ORM or template engine. With support for over 14 template engines via Consolidate.js, you can quickly craft your perfect framework.

## Examples
To view the examples, clone the Express repo and install the dependencies:
```
$ git clone git://github.com/expressjs/express.git --depth 1
$ cd express
$ npm install
```
Then run whichever example you want:
```
$ node examples/content-negotiation
Tests
To run the test suite, first install the dependencies, then run npm test:

$ npm install
$ npm test
```
## DEPLOYING APP FROM HEROKU

https://devcenter.heroku.com/articles/getting-started-with-nodejs

When installation completes, you can use the heroku command from your terminal.

On Windows, start the Command Prompt (cmd.exe) or Powershell to access the command shell.
Use the heroku login command to log in to the Heroku CLI:

``` heroku login
heroku: Press any key to open up the browser to login or q to exit
 ›   Warning: If browser does not open, visit
 ›   https://cli-auth.heroku.com/auth/browser/***
heroku: Waiting for login...
Logging in... done
Logged in as me@example.com 
```

* This command opens your web browser to the Heroku login page. If your browser is already logged in to Heroku, simply click the Log in button displayed on the page.

* This authentication is required for both the heroku and git commands to work correctly.
When installation completes, you can use the heroku command from your terminal.

* On Windows, start the Command Prompt (cmd.exe) or Powershell to access the command shell.
Use the heroku login command to log in to the Heroku CLI:

### heroku login

```heroku: Press any key to open up the browser to login or q to exit
 ›   Warning: If browser does not open, visit
 ›   https://cli-auth.heroku.com/auth/browser/***
heroku: Waiting for login...
Logging in... done
Logged in as me@example.com
```

This command opens your web browser to the Heroku login page. If your browser is already logged in to Heroku, simply click the Log in button displayed on the page.

This authentication is required for both the heroku and git commands to work correctly.

###Deploy the app
In this step you will deploy the app to Heroku.
Create an app on Heroku, which prepares Heroku to receive your source code.
```
heroku create
Creating sharp-rain-871... done, stack is heroku-18
http://sharp-rain-871.herokuapp.com/ | https://git.heroku.com/sharp-rain-871.git
Git remote heroku added
```
When you create an app, a git remote (called heroku) is also created and associated with your local git repository.

Heroku generates a random name (in this case sharp-rain-871) for your app, or you can pass a parameter to specify your own app name.

Now deploy your code:
```
git push heroku master
Counting objects: 488, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (367/367), done.
Writing objects: 100% (488/488), 231.85 KiB | 115.92 MiB/s, done.
Total 488 (delta 86), reused 488 (delta 86)
remote: Compressing source files... done.
remote: Building source:
remote:
remote: -----> Node.js app detected
remote:
remote: -----> Creating runtime environment
remote:
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NODE_VERBOSE=false
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:
remote: -----> Installing binaries
remote:        engines.node (package.json):  12.x
remote:        engines.npm (package.json):   unspecified (use default)
remote:
remote:        Resolving node version 12.x...
remote:        Downloading and installing node 12.13.0...
remote:        Using default npm version: 6.12.0
       ....
remote: -----> Build succeeded!
remote: -----> Discovering process types
remote:        Procfile declares types -> web
remote:
remote: -----> Compressing...
remote:        Done: 19M
remote: -----> Launching...
remote:        Released v3
remote:        http://sharp-rain-871.herokuapp.com deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/nameless-savannah-4829.git
 * [new branch]      master -> master
The application is now deployed. Ensure that at least one instance of the app is running:

heroku ps:scale web=1
Now visit the app at the URL generated by its app name. As a handy shortcut, you can open the website as follows:

heroku open
```

### View logs
Heroku treats logs as streams of time-ordered events aggregated from the output streams of all your app and Heroku components, providing a single channel for all of the events.

View information about your running app using one of the logging commands, heroku logs --tail:
```
heroku logs --tail
2011-03-10T10:22:30-08:00 heroku[web.1]: State changed from created to starting
2011-03-10T10:22:32-08:00 heroku[web.1]: Running process with command: `node index.js`
2011-03-10T10:22:33-08:00 heroku[web.1]: Listening on 18320
2011-03-10T10:22:34-08:00 heroku[web.1]: State changed from starting to up
Visit your application in the browser again, and you’ll see another log message generated.

Press Control+C to stop streaming the logs.
```

###Define a Procfile
Use a Procfile, a text file in the root directory of your application, to explicitly declare what command should be executed to start your app.

The Procfile in the example app you deployed looks like this:
```
web: node index.js
This declares a single process type, web, and the command needed to run it. The name web is important here. It declares that this process type will be attached to the HTTP routing stack of Heroku, and receive web traffic when deployed.
```
Procfiles can contain additional process types. For example, you might declare one for a background worker process that processes items off of a queue.
