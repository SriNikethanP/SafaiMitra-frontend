import React from "react";

const GarbageTypeSelect = ({ setSelectedType, selectedType }) => {
  const handleChange = (event) => {
    const type = event.target.value;
    setSelectedType(type);
  };

  return (
    <div className="mb-4">
      <label className="block text-lg font-medium text-gray-700 mb-2">
        Select Garbage Type:
      </label>
      <select
        value={selectedType}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 shadow-sm min-w-[360px]"
      >
        <option value="" className="text-gray-400">
          Choose Type
        </option>
        <option value="wet">Wet Waste</option>
        <option value="dry">Dry Waste</option>
        <option value="recycle">Recyclable Waste</option>
      </select>
    </div>
  );
};

export default GarbageTypeSelect;
