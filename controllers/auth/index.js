const ctrlWrapper = require("../../helpers/ctrlWrapper.js")
const register = require("./auth.js")
const login = require("./login.js")

module.exports = {
    register: ctrlWrapper(register) ,
    login: ctrlWrapper(login)
}