import CustomDatePicker from "./Custom-datepicker";
import LocationSearch from "./LocationSearch";
import GarbageTypeSelect from "./GarbageType";
import { useState } from "react";
import { useUser } from "@clerk/clerk-react";

const PickupBox = () => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [selectedDate, setDate] = useState(Date.now);
  const [loading, setLoading] = useState(false);

  const { user } = useUser();
  const userId = user?.id;

  const [selectedType, setSelectedType] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !userId ||
      !selectedType ||
      !selectedDate ||
      !address ||
      !coordinates?.lat ||
      !coordinates?.long
    ) {
      alert("Please fill all required fields before submitting.");
      return;
    }

    setLoading(true); // Prevent multiple submissions

    const orderData = {
      user: userId,
      selectedType: selectedType,
      selectedDate,
      address,
      location: {
        lat: parseFloat(coordinates.lat),
        long: parseFloat(coordinates.long),
      },
    };

    try {
      const response = await fetch(
        "https://safaimitra-backend.onrender.com/api/order/create-order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Order created successfully!");
      } else {
        alert(`Order creation failed: ${data.message || "Please try again."}`);
      }
    } catch (error) {
      console.error("Error creating order:", error);
      alert("An error occurred while creating the order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-12 mt-24 space-y-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto  ">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800">Make Your Home Clean</h1>

      {/* Input, Card, and Date Picker Section */}
      <div className="flex flex-col items-start gap-4 w-full">
        {/* <Input /> */}
        <LocationSearch
          setAddress={setAddress}
          setCoordinates={setCoordinates}
        />
        {/* <Card /> */}
        <GarbageTypeSelect
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
        {/* <Dropdown /> */}
        <CustomDatePicker selectedDate={selectedDate} setDate={setDate} />
        <button
          type={"submit"}
          onClick={handleSubmit}
          className="cursor-pointer  transition-all bg-green-500 text-white px-6 py-2 rounded-lg border-green-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          Schedule Pickup
        </button>
      </div>
    </div>
  );
};

export default PickupBox;
