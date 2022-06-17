const {User} = require("../../models/user");
const path = require("path");
const fs = require("fs/promises");
const Jimp = require('jimp');

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async(req, res) => {
    const {path: tempUpload, originalname} = req.file;
    const {_id: id} = req.user;
    const imageName = `${id}_${originalname}`
    try{   
        const resultUpload = path.join(avatarDir, imageName);

        await fs.rename(tempUpload, resultUpload);
        const avatarURL = path.join("public", "avatars", imageName);
        await User.findByIdAndUpdate(req.user._id, {avatarURL});
        Jimp.read(avatarURL, (err, img) => {
            if (err) throw err;
            img.resize(250, 250)
        });
        res.json({avatarURL});
    } catch (error){
        await fs.unlink(tempUpload);
        throw error;
    }
   
};

module.exports = updateAvatar;