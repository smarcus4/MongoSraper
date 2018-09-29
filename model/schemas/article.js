var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
 
 title: {
   type: String,
   required: true
 },
 
 link: {
   type: String,
   required: true
 },

 note: [{ type: [Schema.Types.ObjectId], ref: "Note" }],
 source: {type: String},
 comments: {type: String},
 saved: [Boolean]
});


var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;