import { useEffect, useState } from "react";
import Head from "next/head";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/gallerypics/data.json");
        const data = await response.json();
        const sortedImages = data.images.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setImages(sortedImages);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchImages();
  }, []);

  const handleImageClick = (image) => {
    document.body.style.overflow = "hidden";
    setSelectedImage(image);
  };

  const closePopup = () => {
    document.body.style.overflow = "auto";
    setSelectedImage(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  return (
    <>
      <Head>
        <title>Gallery | blueskychan_ :3</title>
        <meta name="theme-color" content="#FFC0CB" />
        <meta property="og:title" content="Gallery | blueskychan_ :3" key="title" />
        <meta
          property="og:description"
          content="All of my stupid pics to show :3"
        />
      </Head>

      <div className="p-4 backdrop-blur-md bg-gray-800/50 rounded-lg">
        <h1 className="text-2xl font-bold mb-2 text-center text-[#FFC0CB]">Gallery</h1>
        <p className="text-center text-gray-300 mb-4">All of my stupid pics to show :3</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-lg bg-gray-800 cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <div className="relative group">
                <img
                  src={image.path}
                  alt={image.description}
                  className="w-full h-48 object-cover group-hover:blur-sm transition duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
                  <p className="text-white text-lg font-semibold">View Image</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-400">{image.date}</p>
                <p className="text-lg font-semibold">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
            onClick={handleBackdropClick}
          >
            <div className="rounded-lg overflow-hidden shadow-lg max-w-lg w-full mx-4">
              <img
                src={selectedImage.path}
                alt={selectedImage.description}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-4 bg-gray-800">
                <p className="text-lg font-semibold text-white">{selectedImage.description}</p>
                <p className="text-sm text-gray-300">{selectedImage.date}</p>
                <div className="mt-4 flex justify-end space-x-2">
                  <a
                    href={selectedImage.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    View Raw Image
                  </a>
                  <button
                    onClick={closePopup}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;