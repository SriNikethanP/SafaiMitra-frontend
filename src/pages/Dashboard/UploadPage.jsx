import React, { useState } from "react";
import LocationBox from "../../components/Locationbox";
import ImageUploader from "../../components/ImageUploader";
import LocationSearch from "../../components/LocationSearch";
import { useUser } from "@clerk/clerk-react";

const UploadPage = () => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [cloudinaryUrl, setCloudinaryUrl] = useState("");

  // Upload image to Cloudinary
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setImagePreview(URL.createObjectURL(file)); // Show preview

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "safaimitra"); // Replace with Cloudinary preset

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dg6nbuptb/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setCloudinaryUrl(data.secure_url); // Store Cloudinary URL
      console.log("Uploaded Image URL:", data.secure_url);
    } catch (error) {
      console.error("Upload to Cloudinary failed:", error);
    }
  };
  const { user } = useUser();
  const userId = user?.id;

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cloudinaryUrl || !address || !coordinates || !userId) {
      alert("Please upload a photo and enter an address.");
      return;
    }

    const uploadData = JSON.stringify({
      user: userId,
      imageUrl: cloudinaryUrl,
      location: {
        lat: parseFloat(coordinates.lat),
        long: parseFloat(coordinates.long),
      },
      address: address,
    });

    try {
      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: uploadData, // ✅ Ensuring data is sent as JSON
      });

      if (response.ok) {
        alert("Upload successful!");
      } else {
        alert("Upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading:", error);
      alert("An error occurred.");
    }
  };

  return (
    <div className="flex">
      <div className="flex-1 justify-center items-center p-6">
        <h1 className="font-bold text-6xl p-4 mb-6">
          Be a part in cleaning the society
        </h1>
        <div className="flex flex-col items-center gap-4 w-full">
          <ImageUploader
            image={imagePreview}
            handleImageUpload={handleImageUpload}
          />
          <LocationSearch
            setAddress={setAddress}
            setCoordinates={setCoordinates}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="cursor-pointer transition-all bg-green-500 text-white px-6 py-2 rounded-lg border-green-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          >
            Upload
          </button>
        </div>
      </div>
      <div className="flex-1 bg-green-700">
        <LocationBox upload={true} />
      </div>
    </div>
  );
};

export default UploadPage;
