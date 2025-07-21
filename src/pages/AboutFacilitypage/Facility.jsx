import React from "react";
import shbg from "../../assets/Images/shbg.jpg";
import hvideo from "../../assets/Images/hvideo.mp4";
import restaurant from "../../assets/Images/restaurant.jpeg";

const ShilpiResort = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 relative flex justify-center">
          <img
            src={restaurant}
            alt="Star Holiday Resort"
            className="w-full h-90 rounded-lg shadow-lg object-cover"
          />
        </div>
        {/* Left Content */}
        <div className="md:w-1/2">
          <h3 className="text-3xl text-blue-950 font-semibold mb-1">
            The Fitness Club
          </h3>
          <p className="text-lg md:text-1xl font-bold text-blue-950 mb-4 w-fit  pb-1">
            It is complimentary to our guests 24 hours a day.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            At Star Holiday Resort, we believe in creating unforgettable
            memories through luxury, comfort, and exceptional service. Located
            in the heart of Saputara, our resort offers the perfect getaway with
            a blend of traditional hospitality and modern amenities.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            With years of experience in hosting families, solo travelers, and
            corporate guests, we take pride in our secure and peaceful
            environment. Our team is committed to ensuring your stay is not only
            comfortable but truly memorable.
          </p>
        </div>

        {/* Right Images */}
      </div>
    </section>
  );
};

export default ShilpiResort;
