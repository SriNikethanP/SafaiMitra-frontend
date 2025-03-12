import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({ selectedDate, setDate }) => {
  return (
    <div className="relative w-full max-w-xs ">
      <label className="block text-lg font-medium text-gray-700 mb-2">
        Schedule Pickup Date:
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 shadow-sm min-w-[360px]"
      />
    </div>
  );
};

export default CustomDatePicker;
