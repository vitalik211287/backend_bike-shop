const ctrlWrapper = require("../../helpers/ctrlWrapper.js");
const register = require("./auth.js");
const getCurrent = require("./getCurrent.js");
const login = require("./login.js");
const logout = require("./logout.js");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout)
};
