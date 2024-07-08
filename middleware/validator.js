const { check, validationResult } = require("express-validator");

exports.registreRules = () => [
  check("nom", "this field is required").notEmpty(),
  check("prenom", "this field is required").notEmpty(),
  check("cin", "this field is required").notEmpty(),
  check("cin", "this field should be at least 7 caractere").isLength({
    min: 7,
  }),
  check("email", "this field is required").isEmail(),
  check("email", "this field is required").notEmpty(),
  check("phone", "this field is required").notEmpty(),
  check("address", "this field is required").notEmpty(),
  check("password", "this field should be at least 6 caractere").isLength({
    min: 6,
  }),
];

exports.validat = (req, res, next) => {
  const errors = validationResult(req);

  errors.isEmpty() ? next() : res.status(406).json({ errors: errors.array() });
};
