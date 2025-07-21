import React from "react";
import about from "../../assets/Images/about.jpg"; // optional for background

// Icons
import {
  FaBed,
  FaWifi,
  FaShuttleVan,
  FaSwimmingPool,
  FaDumbbell,
  FaCoffee,
} from "react-icons/fa";
import { GiVacuumCleaner, GiMeal } from "react-icons/gi";
import { MdBalcony, MdSpa } from "react-icons/md";
import { BsFillSuitcaseFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

// Amenities Data
const amenities = [
  { icon: <FaBed size={40} />, label: "MASTER BEDROOMS" },
  { icon: <MdBalcony size={40} />, label: "BEST VIEW BALCONY" },
  { icon: <MdSpa size={40} />, label: "MASSAGE & SPA" },
  { icon: <FaWifi size={40} />, label: "WIFI COVERAGE" },
  { icon: <BsFillSuitcaseFill size={40} />, label: "AWESOME PACKAGES" },
  { icon: <GiVacuumCleaner size={40} />, label: "CLEANING EVERYDAY" },
  { icon: <GiMeal size={40} />, label: "BUFFET BREAKFAST" },
  { icon: <FaShuttleVan size={40} />, label: "TAXI SERVICE" },
  { icon: <FaSwimmingPool size={40} />, label: "SWIMMING POOLS" },
  { icon: <FaDumbbell size={40} />, label: "FITNESS CLUB" },
  { icon: <FaCoffee size={40} />, label: "COFFEE SHOP" },
  { icon: <AiOutlineClockCircle size={40} />, label: "24X7 HOURS OPEN" },
];

const Amenities = () => {
  return (
    <section
      className="py-16 px-4 text-center bg-cover bg-center bg-no-repeat"
      //   style={{ backgroundImage: `url(${about})` }} // ✅ Optional background
    >
      <div className=" bg-opacity-80 p-6 md:p-10 rounded-xl max-w-7xl mx-auto shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
          Amenities
        </h2>
        <div className="w-24 h-1 bg-blue-900 mx-auto mb-10"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="text-yellow-700 mb-3">{item.icon}</div>
              <p className="text-sm font-semibold text-blue-900">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
