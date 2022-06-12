const express = require('express');
const router = express.Router();

const validation = require("../../middlewares");
const {joiSchema} = require("../../models/user");
const {usersCtrl} = require("../../controllers");


router.post("/signup", validation.validationUser(joiSchema),validation.ctrlWrapper(usersCtrl.signup));

router.post("/login", validation.validationUser(joiSchema),validation.ctrlWrapper(usersCtrl.login));

router.get("/current", validation.auth, validation.ctrlWrapper(usersCtrl.getCurrent));

router.get("/logout", validation.auth, validation.ctrlWrapper(usersCtrl.logout));

module.exports = router;