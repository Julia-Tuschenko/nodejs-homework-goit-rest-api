const listContacts = require("./listContacts");
const getContactById = require('./getContactById');
const addContact = require("./addContact");
const removeContact = require("./removeContact");
const updateContactById = require("./updateContactById");
const updateStatus = require("./updateStatus")

module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact,
    updateContactById,
    updateStatus,
}