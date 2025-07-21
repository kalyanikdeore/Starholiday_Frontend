import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiFilter, FiChevronDown, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import familyroom from "../../assets/Images/familyroom.jpg";
import familyroom2 from "../../assets/Images/familyroom2.jpg";
import familyroom3 from "../../assets/Images/familyroom3.jpg";
import familyroom4 from "../../assets/Images/familyroom4.jpg";
import { shbg } from "../../assets";

// Product Data
const products = [
  {
    id: 3,
    category: "COUPLES ROOM ",
    title: "Printed Kurti",
    image: familyroom3,
  },
  {
    id: 4,
    category: "FOUR BED ROOM",
    title: "Embroidered Cushion Cover",
    image: familyroom2,
  },
  {
    id: 5,
    category: "SIX BED ROOM",
    title: "Window Curtains",
    image: familyroom,
  },
];

const ProductsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((product) => product.category === activeFilter);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="bg-[#e7e7e7] py-19 px-4 sm:px-6 lg:px-8" id="products">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="h-1 w-16 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </motion.div>

        {/* Desktop Filter */}
        <motion.div
          className="hidden md:flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === category
                  ? "bg-[#436f6e] text-white shadow-md"
                  : "bg-[#f5f0eb] text-[#436f6e] hover:bg-[#e0dbdb]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Mobile Filter */}
        <div className="md:hidden mb-6 relative">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center justify-between w-full max-w-xs mx-auto bg-[#436f6e] text-white px-5 py-3 rounded-full shadow"
          >
            <span>
              {activeFilter === "All" ? "All Categories" : activeFilter}
            </span>
            <FiChevronDown
              className={`transition-transform ${
                showMobileFilters ? "rotate-180" : ""
              }`}
            />
          </button>

          {showMobileFilters && (
            <motion.div
              className="absolute z-10 w-full max-w-xs mx-auto mt-2 bg-white rounded-lg shadow-xl overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveFilter(category);
                    setShowMobileFilters(false);
                  }}
                  className={`w-full px-4 py-3 text-left ${
                    activeFilter === category
                      ? "bg-[#f5f0eb] text-[#436f6e]"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
              }}
              className="bg-white rounded-xl overflow-hidden border border-[#c5a17f]/20 transition-all cursor-pointer"
              onClick={() => openModal(product.image)}
            >
              <div className="relative h-68 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-[#8d8f8e] text-lg">
              No products found in this category.
            </p>
            <button
              onClick={() => setActiveFilter("All")}
              className="mt-4 text-[#436f6e] font-medium hover:text-[#3a6261]"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative w-[500px] h-[500px] bg-white rounded-md shadow-lg overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-500 z-10"
            >
              <FiX size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-full border border-gray-200 object-cover"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProductsPage;
