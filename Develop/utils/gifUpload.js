const multer = require("multer");

const imageVerify = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb("Image files only", false);
    }
};

var storeGif = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/resources/static/assets/uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-bobbyfirmino-${file.originalname}`)
    },
});

var uploadGif = multer({ storage: storeGif, fileFilter: imageVerify});

module.exports = uploadGif;