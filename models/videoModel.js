const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const videoSchema = mongoose.Schema({
  title: {type: String, required: true},
  url: {type: String, required: true},
  category: {type: String, required: true},
  description: {type: String, required: true},
  tags: {type: String, required: true},
  starring: {type: String},
});

videoSchema.methods.serialize = function() {
  return {
    id: this._id,
    title: this.title,
    url: this.url,
    category: this.category,
    description: this.description,
    tags: this.tags,
    starring: this.starring,
  };
};

const Video = mongoose.model('Video', videoSchema);
module.exports = {Video};
