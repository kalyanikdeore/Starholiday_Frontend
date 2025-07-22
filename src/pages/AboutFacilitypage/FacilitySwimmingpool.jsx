import React from "react";
import restaurant from "../../assets/Images/restaurant.jpeg";

const ShilpiResort = () => {
  return (
    <section className="bg-white px-6 md:px-16 py-16 relative z-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Image with decorative elements (now on the right) */}
          <div className="lg:w-1/2 relative z-0">
            <div className="relative rounded-xl overflow-hidden shadow-2xl z-10">
              <img
                src={restaurant}
                alt="Star Holiday Resort Swimming Pool"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent z-20"></div>
            </div>

            {/* Decorative elements - behind the image */}
            {/* <div className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-amber-400 rounded-lg z-0 hidden md:block"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 border-4 border-blue-900 rounded-full z-0 hidden md:block"></div> */}
          </div>

          {/* Content (now on the left) - above decorative elements */}
          <div className="lg:w-1/2 relative z-30">
            <div className="bg-white p-8 rounded-xl  relative z-40">
              <h3 className="text-4xl font-bold text-blue-900 mb-3">
                <span className="text-blue-600">Swimming</span> Pool
              </h3>

              <div className="flex items-center mb-6">
                <div className="w-16 h-1 bg-blue-600 mr-4 z-40"></div>
                <p className="text-lg font-semibold text-blue-900 z-40">
                  Complimentary for our guests 24 hours a day
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg z-40">
                At Star Holiday Resort, we believe in creating unforgettable
                memories through luxury, comfort, and exceptional service.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6 text-lg z-40">
                Located in the heart of Saputara, our resort offers the perfect
                getaway with a blend of traditional hospitality and modern
                amenities.
              </p>

              {/* <ul className="grid grid-cols-2 gap-3 mb-6 z-40">
                <li className="flex items-center z-40">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-2 z-40"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Crystal clear water</span>
                </li>
                <li className="flex items-center z-40">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-2 z-40"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Poolside service</span>
                </li>
                <li className="flex items-center z-40">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-2 z-40"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Safety measures</span>
                </li>
                <li className="flex items-center z-40">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-2 z-40"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Sun loungers</span>
                </li>
              </ul> */}

              {/* <button className="bg-blue-600 hover:bg-blue-900 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 z-40">
                View Pool Rules
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShilpiResort;
