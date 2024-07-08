const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const secret = config.get("secret");
exports.registre = async (req, res) => {
  const { nom, prenom, birthDate, cin, email, password, phone, address } =
    req.body;
  const existUser = await User.findOne({ email });
  if (existUser) res.status(409).json({ msg: "user aleardy exist" });

  const mydate = new Date(birthDate);
  var q = new Date();
  var date = new Date(q.getFullYear(), q.getMonth(), q.getDate());

  if (date < mydate) res.status(409).json({ msg: "invalid date" });

  try {
    const newUser = new User({
      nom,
      prenom,
      birthDate,
      cin,
      email,
      password,
      phone,
      address,
    });
    let salt = bcryptjs.genSaltSync(10);
    let hash = bcryptjs.hashSync(password, salt);
    newUser.password = hash;

    const payload = {
      _id: newUser._id,
    };

    let token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        _id: newUser._id,
        nom: newUser.nom,
        prenom: newUser.prenom,
      },
    });
    await newUser.save();
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) res.status(404).json({ msg: "wrong information" });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) return res.status(404).json({ msg: "wrong informaation" });
    const payload = {
      _id: user._id,
      nom: user.nom,
      prenom: user.prenom,
      birthDate: user.birthDate,
      cin: user.cin,
      email: user.email,
      phone: user.phone,
      address: user.address,
      userRole: user.userRole,
    };
    let token = jwt.sign(payload, secret);
    res.send({
      token,
      user: {
        _id: user._id,
        nom: user.nom,
        prenom: user.prenom,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
exports.auth = (req, res) => {
  res.send(req.user);
};








