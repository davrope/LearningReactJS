// Not sure of this!!!!


const mongoose = require('mongoose');
const { Schema } = mongoose;
// const RecipientSchema = require('./Recipient');

const projectSchema = new Schema({
  title: String,
  category: String,
  objective: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateCreated: Date
});

mongoose.model('projects', projectSchema);
