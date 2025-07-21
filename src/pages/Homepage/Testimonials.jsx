import React from "react";
import about from "../../assets/Images/about.jpg";
import restaurant2 from "../../assets/Images/restaurant2.jpeg";
const Testimonials = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 font-sans bg-white text-gray-800">
      <h2 className="text-4xl text-blue-900 font-bold mb-8 text-center">
        Testimonials
      </h2>

      <div className="border-t border-gray-300 my-4"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Right Column */}
        <div
          className="space-y-8 shadow"
          style={{
            marginTop: "101px",
          }}
        >
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <img
                src={restaurant2}
                alt="Guest book image"
                className="w-full h-auto rounded-full border-4 border-white shadow-lg"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  marginLeft: "119px",
                }}
              />
            </div>
          </div>

          <div
            className="bg-gray-50 p-6 rounded-lg"
            style={{ marginTop: "-20px" }}
          >
            <h2 className="text-2xl text-center text-blue-700 font-semibold mb-2">
              Amitabh Bachchan
            </h2>
            <p className="italic text-center text-blue-600 mb-4">
              (Film actor)
            </p>
            <p className="text-gray-600 border-l-4 border-blue-200 pl-4 py-2">
              "A short but very pleasant stay. Thank you for your hospitality.
              keep up the good work."
            </p>
          </div>
        </div>
        {/* Left Column */}
        <div className="space-y-8 shadow p-5">
          <h2 className="text-2xl font-semibold mb-4">Google Reviews</h2>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium">Krutarth Patel</h3>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-600">
              Good clean and hygenic rooms. Helpful staff, total customer
              satisfaction. Will always book them when visiting Saputara.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium">Vijay Shivdasani</h3>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-600">
              Very nice place. Very cooperative staff, food quality is very
              good. prompt service for each n every things. Specially restaurant
              staff of shilpi hill resort have ever smily welcome to us. We
              enjoying special discount facility. Saputara jana hay to shilpi
              hill resort me hirutara hay. Thank you so much to make our
              holidays remembering...
            </p>
          </div>
          <div className="pt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 mb-8 text-sm shadow-md transition-colors duration-300">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
