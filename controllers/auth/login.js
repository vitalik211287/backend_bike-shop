const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");
const jvt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const {SECRET_KEY} = process.env

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password invalid");
  }
  const passwordCompair = await bcrypt.compare(password, user.password);
  if (!passwordCompair) {
    throw HttpError(401, "Email or password invalid");
  }

  const payload = {
    id: user._id,
  }

  const token = jvt.sign(payload,SECRET_KEY, {expiresIn: "23h"});
  res.json({
    token,
  });
};

module.exports = login;
