const rendezvous = require("../models/rendezvous");

exports.addrendezvous = async (req, res) => {
  const {
    nom,
    prenom,
    cin,
    test,
    date,
    phone,
    heur,
    email,
    confirmation,
    isDone,
    description,
  } = req.body;
  const mydate = new Date(date);
  var q = new Date();
  var DatE = new Date(q.getFullYear(), q.getMonth(), q.getDate());
  if (DatE > mydate) res.status(409).json({ msg: "invalid date" });

  if (heur) {
    var [hours, mins] = heur.split(":");
  }
  if (hours && ((hours < 18 && hours > 14) || (hours < 12 && hours > 8))) {
    console.log(hours);
  } else {
    if (hours) res.status(409).json({ msg: "invalid hour we dont work" });
  }
  try {
    const newrendezvous = new rendezvous({
      nom,
      prenom,
      cin,
      test,
      date,
      phone,
      email,
      confirmation,
      heur,
      isDone,
      description,
    });
    await newrendezvous.save();
    res.send(newrendezvous);
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

exports.getappointment = async (req, res) => {
  try {
    const allappointment = await rendezvous.find().sort({ date: -1 });
    res.send(allappointment);
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

exports.getoneappointment = async (req, res) => {
  try {
    const appointment = await rendezvous.findById(req.params.id);
    res.send(appointment);
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    const deleteappointmentt = await rendezvous.findByIdAndDelete(
      req.params.id
    );
    res.send("appointment deleted");
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

exports.Updateappointment = async (req, res) => {
  try {
    const editedappointment = await rendezvous.findByIdAndUpdate(
      req.params.id,
      { ...req.body }
    );
    res.send(editedappointment);
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};
