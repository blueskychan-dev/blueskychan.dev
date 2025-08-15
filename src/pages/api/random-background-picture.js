import path from "path";
import fs from "fs";

export default function handler(req, res) {
    if (req.method !== "GET") {
        res.status(405).json({ message: "Method Not Allowed" });
        return;
    }

    const random = Math.floor(Math.random() * 11) + 1; // Generate random number 1-12
    const imagePath = path.join(process.cwd(), "public", "wallpaper", `${random}.jpeg`);

    // Check if the image file exists
    if (!fs.existsSync(imagePath)) {
        res.status(404).json({ message: "Image Not Found" });
        return;
    }

    // Read the image file from the filesystem
    const image = fs.readFileSync(imagePath);

    // Set the appropriate headers and send the image
    res.setHeader("Content-Type", "image/jpeg");
    res.send(image);
}