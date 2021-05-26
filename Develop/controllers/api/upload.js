const fs = require("fs");
const { Bobby } = require("../../models");
const uploadGif = require("../../utils/gifUpload");

const uploadGifs = async (req, res) => {
    try {
        console.log(req.file);
        if (req.file === undefined) {
            return res.send('You must select a file.');
        }

        Bobby.create({
            type: req.file.mimetype,
            name: req.file.originalname,
            img: fs.readFileSync(
                __basedir + "/resources/static/assets/uploads/" + req.file.filename
            ),
        }).then((gif) => {
            fs.writeFileSync(
                __basedir + "/resources/static/assets/tmp" + gif.name, 
                image.data
            );
            return res.send('File has been uploaded.');
        });
    } catch (error) {
        console.log(error);
        return res.send(`Error uploading image: ${error}`);
    }
};

module.exports = uploadGif;

