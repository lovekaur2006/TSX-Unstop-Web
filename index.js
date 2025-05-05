const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;


const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

app.use(cors());
app.use("/uploads", express.static(uploadsDir));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
       
        const safeName = file.originalname.replace(/[, ]+/g, "_");
        cb(null, `${ Date.now() } - ${ safeName }`);
    },
});

const upload = multer({ storage });

app.post("/upload", upload.single("resume"), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send("No file uploaded.");
        }
        res.status(200).send("Resume uploaded successfully.");
    } catch (error) {
        console.error("Upload error:", error);
        res.status(500).send("Upload failed.");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});