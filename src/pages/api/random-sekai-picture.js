import path from "path";
import fs from "fs";

export default function handler(req, res) {
    const random = Math.floor(Math.random() * 3) + 1; // Generate random number 1-3
    const imagePath = path.join(process.cwd(), "public", "sekai", `${random}.jpeg`);

    // Read the image file from the filesystem
    const image = fs.readFileSync(imagePath);

    // Set the appropriate headers and send the image
    res.setHeader("Content-Type", "image/jpeg");
    res.send(image);
}