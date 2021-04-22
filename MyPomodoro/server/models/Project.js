// Not sure of this!!!!


const mongoose = require('mongoose');
const { Schema } = mongoose;
// const RecipientSchema = require('./Recipient');


// const todosSchema = new Schema ({
//   text: String,
//   completed: Boolean
// })

const projectSchema = new Schema({
  title: String,
  category: String,
  objective: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateCreated: Date,
  todos: [],
  time: [{
    time: Number
  }]
});



// const todosSchema = new Schema ({
//   text: String,
//   completed: Boolean,
  
// })

mongoose.model('projects', projectSchema);

