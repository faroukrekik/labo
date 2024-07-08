const mongoose = require("mongoose");

const schema = mongoose.Schema;

const rendezvousSchema = new schema({
  nom: String,
  prenom: String,
  cin: String,
  test: String,
  date: String,
  phone: String,
  heur: String,
  email: String,
  confirmation: Boolean,
  isDone: Boolean,
  description: String,
});

module.exports = mongoose.model("rendezvous", rendezvousSchema);
