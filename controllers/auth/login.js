const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");

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
  const token = "";
  res.json({
    token,
  });
};

module.exports = login;
