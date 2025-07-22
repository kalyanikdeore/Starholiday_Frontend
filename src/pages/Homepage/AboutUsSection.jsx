import React from "react";
import about1 from "../../assets/Images/restaurant.jpeg";
import about2 from "../../assets/Images/restaurant2.jpeg";
import about3 from "../../assets/Images/restaurant3.jpeg";
import { useNavigate } from "react-router-dom";

const AboutUsSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/about_hill"); // Navigate to the About Us page
  };

  return (
    <section className="bg-white py-16 px-6 md:px-16" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h3 className="text-lg text-yellow-700 font-semibold mb-1">
            Welcome to
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4 border-b-4 w-fit border-blue-950 pb-1">
            Star Holiday Resort
          </h1>
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
          <button
            onClick={handleLearnMore}
            className="mt-6 bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition"
          >
            LEARN MORE
          </button>
        </div>

        {/* Right Images */}
        <div className="md:w-1/2 relative flex justify-center">
          <div className="relative z-0">
            <img
              src={about1}
              alt="Resort Exterior"
              className="rounded shadow-lg max-w-md"
            />
          </div>
          <div className="absolute top-1/3 left-[-30px] md:left-[-60px] z-0">
            <img
              src={about2}
              alt="Resort Interior"
              className="w-60 md:w-72 rounded shadow-lg mb-4"
            />
            <img
              src={about3}
              alt="Hotel Room"
              className="w-60 md:w-72 rounded shadow-lg"
              style={{ marginLeft: "102px", marginTop: "-81px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
