import React from "react";

const SuperDeluxeRoom = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start bg-white p-8 rounded-2xl shadow-lg">
        {/* Left Content */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-blue-900 uppercase mb-3">
            Couple Room
          </h2>
          <h3 className="text-lg font-semibold text-blue-800 mb-4">
            Simplicity combined with luxury characterizing the whole resort
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            The rooms reflect the same philosophy as the hotel, "Simplicity
            combined with luxury characterizing the whole resort".
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            All rooms feature modern flooring, deep walnut furniture, finest
            linen tapestries and brilliant colors of the specially commissioned
            oil paintings. Every nook and corner is properly detailed out and
            the bed is gracefully dressed in high-end cotton sheet.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            The resort certainly lives up to the high standards expected by its
            elite patrons.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="uppercase text-blue-900 font-semibold text-sm mb-2">
                Special Room
              </h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-800">
                <li>Size: 35 m2 / 376 ft2</li>
                <li>View: Ocean</li>
                <li>Bed: King-size or twin beds</li>
              </ul>
            </div>
            <div>
              <h4 className="uppercase text-blue-900 font-semibold text-sm mb-2">
                Service Room
              </h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-800">
                <li>Oversized work desk</li>
                <li>Hairdryer</li>
                <li>Iron/ironing board upon request</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Book Now Button */}
        {/* <div className="flex justify-center md:justify-end items-start">
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-5 rounded-lg text-sm tracking-widest uppercase font-semibold shadow-md transition duration-300 w-full md:w-48 h-28">
            Book Now
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default SuperDeluxeRoom;
