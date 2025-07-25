import React from "react";
import restaurant from "../../assets/Images/restaurant.jpeg";

const FacilityGarden = () => {
  return (
    <section className="bg-white px-6 md:px-16 py-16 relative z-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image with decorative elements */}
          <div className="lg:w-1/2 relative z-0">
            <div className="relative rounded-xl overflow-hidden shadow-2xl z-10">
              <img
                src={restaurant}
                alt="Star Holiday Resort Garden & Lounge"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105 z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-20"></div>
            </div>
          </div>

          {/* Content - higher z-index to ensure it stays above */}
          <div className="lg:w-1/2 relative z-30">
            <div className="bg-white p-8 rounded-xl  relative z-40">
              <h3 className="text-4xl font-bold text-blue-900 mb-3 relative z-50">
                <span className="text-amber-500">Garden</span> & Big Lounge
              </h3>

              <div className="flex items-center mb-6 relative z-50">
                <div className="w-16 h-1 bg-amber-500 mr-4 z-50"></div>
                <p className="text-lg font-semibold text-blue-900 z-50">
                  Complimentary for our guests 24 hours a day
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg relative z-50">
                At Star Holiday Resort, we believe in creating unforgettable
                memories through luxury, comfort, and exceptional service.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6 text-lg relative z-50">
                Located in the heart of Saputara, our resort offers the perfect
                getaway with a blend of traditional hospitality and modern
                amenities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilityGarden;
