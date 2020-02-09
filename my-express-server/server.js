const express = require("express");
const app = express();
app.get("/", function(req, res)
{
  res.send("<h1>hello!</h1>");
});
app.get("/contact", function(req, res)
{
  res.send("<h1>hello! contact me at 8218254367</h1>");
});
app.get("/about", function(req, res)
{
  res.send("<h1>hello! i m garima singh</h1>");
});
app.get("/hobbies", function(req, res)
{
  res.send("<h1>hello! i love reading and games.</h1><ul><li>coffee</li><li>coffee</li><li>coffee</li><li>coffee</li><li>coffee</li></ul>");
});


app.listen(3000, function(){
  console.log("server started on port 1");
});
