import React from "react";

const ImageUploader = ({ image, handleImageUpload }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <label className="w-124 h-72 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200 transition">
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
        {image ? (
          <img
            src={image}
            alt="Uploaded Preview"
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <span className="text-gray-500">Click to upload an image</span>
        )}
      </label>
    </div>
  );
};

export default ImageUploader;
