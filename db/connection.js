var mongoose = require("mongoose");

var ComplimentSchema = new mongoose.Schema(
  {
    body: String,
    author: String,
    url: String,
    tags: [String]
  }
);

mongoose.model("Compliment", ComplimentSchema);

if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.MONGODB_URL);
}else{
  mongoose.connect("mongodb://localhost/eightgreat");
}

module.exports = mongoose;
