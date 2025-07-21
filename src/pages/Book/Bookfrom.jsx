import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    checkInDate: "",
    phoneNumber: "",
    roomType: "",
    selectedDays: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDaySelect = (day) => {
    setFormData((prev) => {
      const newSelectedDays = prev.selectedDays.includes(day)
        ? prev.selectedDays.filter((d) => d !== day)
        : [...prev.selectedDays, day];
      return { ...prev, selectedDays: newSelectedDays };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        Booking Now
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <p className="text-sm text-gray-500 mb-4">
            * Indicates required field
          </p>

          {/* Name Section */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Name*
            </label>
            <div className="flex space-x-4">
              <div className="flex-1">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>
            </div>
          </div>

          {/* Date Check-in */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Date Check in DD / MM / YY*
            </label>
            <input
              type="date"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          <div className="border-t border-gray-200 my-6"></div>

          {/* Phone Number */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number*
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              placeholder="+1 (___) ___-____"
            />
          </div>

          {/* Room Type */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Required Room*
            </label>
            <div className="grid grid-cols-2 gap-3">
              {["2 Beded", "4 Beded", "6 Beded"].map((room) => (
                <button
                  key={room}
                  type="button"
                  onClick={() =>
                    handleChange({ target: { name: "roomType", value: room } })
                  }
                  className={`py-2 px-3 rounded-lg border transition ${
                    formData.roomType === room
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-white border-gray-300 hover:border-indigo-400"
                  }`}
                >
                  {room}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 my-6"></div>

          {/* Days Selection */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Choose Any*
            </label>
            <div className="grid grid-cols-3 gap-3">
              {days.map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => handleDaySelect(day)}
                  className={`py-2 px-3 rounded-lg border transition ${
                    formData.selectedDays.includes(day)
                      ? "bg-purple-600 text-white border-purple-600"
                      : "bg-white border-gray-300 hover:border-purple-400"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 my-6"></div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition shadow-md hover:shadow-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
