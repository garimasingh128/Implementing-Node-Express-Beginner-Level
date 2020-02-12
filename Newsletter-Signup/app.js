const express = require("express");
const bodyParser = require("body-parser");
const app= express();
const request = require("request");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res)
{
  res.sendFile(__dirname + "/signup.html");
});
app.post("/", function(req, res)
{
 var firstName = req.body.fname;
 var secondName = req.body.sname;
 var email = req.body.email;
 var data = {
   members: [
     {email_address: email,
     status : "subscribed",
   merge_fields: {
     FNAME: firstName,
     LNAME: secondName
   }}
   ]
 };
 var jsonData = JSON.stringify(data);
 var option = {
   url : "https://us4.api.mailchimp.com/3.0/lists/8e46d6aba6",
   method : "POST",
   headers: {
     "Authorization": "garima d62108c77d105e23b1663e9d7f7b60db-us4"

   },
   //body : jsonData,
 };
 request(option, function(error, response, body)
{

if(error)
{
  res.sendFile(__dirname + "/failure.html");
}
else{
  if(response.statusCode == 200)
  {
      res.sendFile(__dirname + "/success.html");
  }
  else {
  res.sendFile(__dirname + "/failure.html");
  }
}

});
 console.log(firstName + secondName + email);
});
app.post("/failure", function(req, res) {
  res.redirect("/");
});

app.listen(3000, function()
{
  console.log("server running on port 3000");
});
//d62108c77d105e23b1663e9d7f7b60db-us4 api key

//8e46d6aba6 list id
