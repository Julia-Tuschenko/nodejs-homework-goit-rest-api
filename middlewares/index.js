const validationAddContact = require("./validationAddContact");
const validationUpdate = require("./validationUpdate");
const ctrlWrapper = require("./ctrlWrapper");
const validationStatus = require("./validationStatus");
const validationUser = require("./validationUser");
const auth = require("./authorization");

module.exports = {
    validationAddContact,
    validationUpdate,
    ctrlWrapper,
    validationStatus,
    validationUser,
    auth
}