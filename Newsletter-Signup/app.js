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
   url : "https://us4.api.mailchimp.com/3.0/lists/your_list_id",
   method : "POST",
   headers: {
     "Authorization": "garima your_api_key"

   },
   body : jsonData,
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

app.listen(process.env.PORT || 3000, function()
//dynamic port
{
  console.log("server running on port 3000");
});
<<<<<<< HEAD
=======

>>>>>>> 67d5bb451917c7861a2bbc0bdf8b10f329909f8a
