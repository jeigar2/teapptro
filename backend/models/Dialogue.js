const mongoose = require('mongoose');

const DialogueSchema = new mongoose.Schema({
  playId: { type: mongoose.Schema.Types.ObjectId, ref: 'Play', required: true },
  sceneNumber: { type: Number, required: true },
  character: { type: String, required: true },
  text: { type: String, required: true },
  nextDialogue: { type: mongoose.Schema.Types.ObjectId, ref: 'Dialogue' }
});

module.exports = mongoose.model('Dialogue', DialogueSchema);