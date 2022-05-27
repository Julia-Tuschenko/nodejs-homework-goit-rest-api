const express = require('express');
const router = express.Router();
const validation = require("../../middlewares");
const contactSchema = require("../../schemas");

const contactsCtrl = require("../../controllers");
const validateMiddlewareUpdate = validation.validationUpdate(contactSchema);
const validateMiddlewareAdd = validation.validationAddContact(contactSchema);


router.get('/', validation.ctrlWrapper(contactsCtrl.listContacts));

router.get('/:id', validation.ctrlWrapper(contactsCtrl.getContactById));
 
router.post('/', validateMiddlewareAdd, validation.ctrlWrapper(contactsCtrl.addContact));

router.delete('/:id', validation.ctrlWrapper(contactsCtrl.removeContact));

router.put('/:id',validateMiddlewareUpdate, validation.ctrlWrapper(contactsCtrl.updateContactById));

module.exports = router;
