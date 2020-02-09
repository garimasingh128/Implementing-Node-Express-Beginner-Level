const express = require("express");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});
app.post("/" , function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
var result = num1 + num2;
  res.send("The result is" + result);
  res.send("thanks for posting that");
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator" , function(req, res) {
  var wt = parseFloat(req.body.wt);
  var ht = parseFloat(req.body.ht);
var result = wt/(ht*ht);
  res.send("The result is" + result);
  res.send("thanks  for posting that");
});


app.listen(3000, function(n ) {
  console.log("Server running on port 3000");
});
