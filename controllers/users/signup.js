const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const { User } = require("../../models");
const { nanoid } = require("nanoid");
const {sendEmail} = require('../../helpers')

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  }

  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();
  const newUser = new User({ email, password, avatarURL, verificationToken });
  newUser.setPassword(password);
  await newUser.save();
  const mail = {
    to: email,
    subject:'Підтвердження emsil',
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Натисніть для підтверження</a>`
  }
  await sendEmail(mail);
  
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        subscription: "starter",
        avatarURL,
        verificationToken,
      },
    },
  });
};

module.exports = signup;
