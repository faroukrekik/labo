const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  nom: String,
  prenom: String,
  birthDate: String,
  cin: String,
  email: String,
  password: String,
  phone: String,
  address:String,

  userRole: {
    type: String,
    roles: ["user", "admin"],
    default: "user",
  },
});
module.exports = mongoose.model("User", userSchema);
