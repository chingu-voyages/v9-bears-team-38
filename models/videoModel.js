const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
  title: {type: String, required: [true, 'Title is required']},
  url: {type: String, required: [true, 'URL is required']},
  date: {type: String},
  category: {type: String, required: [true, 'Category is required']},
  description: {type: String, required: [true, 'Description is required']},
  tags: {type: String, required: [true, 'At least one Tag is required']},
  starring: {type: String},
});

// videoSchema.methods.serialize = function() {
//   return {
//     id: this._id,
//     title: this.title,
//     url: this.url,
//     udaterl: this.date,
//     category: this.category,
//     description: this.description,
//     tags: this.tags,
//     starring: this.starring,
//   };
// };

const Video = mongoose.model('Video', videoSchema);
module.exports = {Video};
