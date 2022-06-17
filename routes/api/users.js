const express = require('express');
const router = express.Router();

const {validationUser, ctrlWrapper, auth, upload} = require("../../middlewares");
const {joiSchema, joiSubscriptionSchema} = require("../../models/user");
const {usersCtrl} = require("../../controllers");

router.post("/signup", validationUser(joiSchema),ctrlWrapper(usersCtrl.signup));

router.post("/login", validationUser(joiSchema),ctrlWrapper(usersCtrl.login));

router.get("/current", auth, ctrlWrapper(usersCtrl.getCurrent));

router.get("/logout", auth, ctrlWrapper(usersCtrl.logout));

router.patch('/',validationUser(joiSubscriptionSchema), ctrlWrapper(usersCtrl.updateSubscription));

router.patch('/avatars', auth, upload.single("avatar"), ctrlWrapper(usersCtrl.updateAvatar));

module.exports = router;