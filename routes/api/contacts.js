const express = require('express');
const router = express.Router();
const validation = require("../../middlewares");
const {joiSchema, favotiteJoiSchema} = require("../../models/contacts");

const contactsCtrl = require("../../controllers");
// const validateMiddlewareUpdate = validation.validationUpdate(joiSchema);
// const validateMiddlewareAdd = validation.validationAddContact(joiSchema);


router.get('/', validation.ctrlWrapper(contactsCtrl.listContacts));

router.get('/:id', validation.ctrlWrapper(contactsCtrl.getContactById));
 
router.post('/', validation.validationAddContact(joiSchema), validation.ctrlWrapper(contactsCtrl.addContact));

router.delete('/:id', validation.ctrlWrapper(contactsCtrl.removeContact));

router.put('/:id',validation.validationUpdate(joiSchema), validation.ctrlWrapper(contactsCtrl.updateContactById));

router.patch('/:id/favorite',validation.validationStatus(favotiteJoiSchema), validation.ctrlWrapper(contactsCtrl.updateStatus));

module.exports = router;
