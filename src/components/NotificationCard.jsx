import React, { useEffect, useState } from "react";

const PickupNotificationCard = () => {
  const [pickups, setPickups] = useState([]);

  useEffect(() => {
    const fetchPickups = async () => {
      try {
        const response = await fetch(
          "https://safaimitra-backend.onrender.com/api/uploads"
        );
        const data = await response.json();

        if (response.ok) {
          setPickups(data.data);
        } else {
          console.error("Failed to fetch pickups:", data.message);
        }
      } catch (error) {
        console.error("Error fetching pickups:", error);
      }
    };

    fetchPickups();
  }, []);

  const getShortAddress = (address) => {
    return address.length > 50 ? address.substring(0, 50) + "..." : address;
  };

  return (
    <div className="w-full flex flex-col items-center p-4">
      {pickups.length > 0 ? (
        pickups.map((pickup) => (
          <div
            key={pickup._id}
            className="bg-green-700 text-white p-6 rounded-xl shadow-lg flex flex-col sm:flex-row items-center gap-6 w-full sm:w-3/4 m-3"
          >
            {/* Image Preview */}
            {pickup.imageUrl && (
              <img
                src={pickup.imageUrl}
                alt="Pickup Waste"
                className="w-24 h-24 rounded-lg object-cover border-2 border-white shadow-md"
              />
            )}

            {/* Order Details */}
            <div className="flex-1 text-lg">
              <p className="font-semibold text-xl">Address:</p>
              <p className="text-base opacity-90">
                {getShortAddress(pickup.address)}
              </p>

              <p className="font-semibold text-xl mt-3">Scheduled Date:</p>
              <p className="text-base opacity-90">
                {new Date(pickup.createdAt).toLocaleString()}
              </p>

              <p className="font-semibold text-xl mt-3">Reward:</p>
              <p className="text-base opacity-90">10 Points</p>
            </div>

            {/* Pickup Status */}
            <p className="bg-white text-green-700 px-4 py-2 rounded-lg text-lg font-bold shadow-sm">
              Pending
            </p>
          </div>
        ))
      ) : (
        <p className="text-black font-bold text-lg">
          No pickup requests found.
        </p>
      )}
    </div>
  );
};

export default PickupNotificationCard;
