var express = require("express");
var mongoose = require("./db/connection");
var hbs = require("express-handlebars");
var parser =require("body-parser");

var app = express();
var Compliment = mongoose.model("Compliment");

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));

app.use("/public", express.static("public"));
app.use(parser.json({extended: true}));

app.get("/api/compliments", function(req, res){
  Compliment.find({}).then(function(compliments){
    res.json(compliments);
  });
});

app.get("/*", function (req, res){
  res.render("compliments");
});

app.listen(app.get("port"), function(){
  console.log("I'm woking!");
});
