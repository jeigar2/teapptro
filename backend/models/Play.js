const mongoose = require('mongoose');

const PlaySchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  scenes: [{
    sceneNumber: { type: Number, required: true },
    dialogues: [{
      character: { type: String, required: true },
      text: { type: String, required: true },
      nextDialogue: { type: mongoose.Schema.Types.ObjectId, ref: 'Dialogue' }
    }]
  }]
});

module.exports = mongoose.model('Play', PlaySchema);