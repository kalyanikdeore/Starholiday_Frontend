import React from "react";
import { motion } from "framer-motion";

import familyroom from "../../assets/Images/familyroom.jpg";
import familyroom2 from "../../assets/Images/familyroom2.jpg";
import familyroom3 from "../../assets/Images/familyroom3.jpg";

const rooms = [
  {
    title: "SUPER  AC",
    image: familyroom,
  },
  {
    title: "DELUXE AC",
    image: familyroom2,
  },
  {
    title: "BAGHBAN SUITE",
    image: familyroom3,
  },
];

const LuxuryRooms = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-16">
      {/* Section heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl text-blue-900 font-semibold">
          Our Luxury Rooms
        </h2>
        <div className="flex justify-center mt-4">
          <span className="h-[1px] w-10 bg-yellow-600 mt-2 mr-2"></span>
          <span className="text-yellow-600 text-xl">✦</span>
          <span className="h-[1px] w-10 bg-yellow-600 mt-2 ml-2"></span>
        </div>
      </div>

      {/* Room cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {rooms.map((room, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded shadow-lg overflow-hidden"
          >
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                {room.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LuxuryRooms;
