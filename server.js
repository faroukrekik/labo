const express = require("express");
const connectDB = require("./config/connectDB");
const user = require("./routes/user");
const rendez = require("./routes/rendez");
const app = express();
app.use(express.json());
app.use("/user", user);
app.use("/rendezvous", rendez);

connectDB();
app.listen(5000, (err) =>
  err ? console.error(err) : console.log("server is runnig on port 5000")
);
