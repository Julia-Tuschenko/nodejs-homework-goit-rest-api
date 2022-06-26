const express = require('express');
const router = express.Router();

const {validationUser, ctrlWrapper, auth, upload} = require("../../middlewares");
const {joiSchema, joiSubscriptionSchema, joiReVerifySchema} = require("../../models/user");
const {usersCtrl} = require("../../controllers");

router.post("/signup", validationUser(joiSchema),ctrlWrapper(usersCtrl.signup));

router.post("/login", validationUser(joiSchema),ctrlWrapper(usersCtrl.login));

router.post("/verify", validationUser(joiReVerifySchema), ctrlWrapper(usersCtrl.verify));

router.get("/current", auth, ctrlWrapper(usersCtrl.getCurrent));

router.get("/verify/:verificationToken", auth, ctrlWrapper(usersCtrl.verifyEmail));

router.get("/logout", auth, ctrlWrapper(usersCtrl.logout));

router.patch('/',validationUser(joiSubscriptionSchema), ctrlWrapper(usersCtrl.updateSubscription));

router.patch('/avatars', auth, upload.single("avatar"), ctrlWrapper(usersCtrl.updateAvatar));

module.exports = router;