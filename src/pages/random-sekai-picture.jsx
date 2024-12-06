// File: /pages/random-sekai-picture.jsx
import { useEffect } from "react";

export default function RandomSekaiPicture() {
    useEffect(() => {
        // Redirect to the API route to render the image
        window.location.href = "/api/random-sekai-picture";
    }, []);

    return null; // No content rendered by the page itself
}
