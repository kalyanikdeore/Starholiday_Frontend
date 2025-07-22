import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
// Uncomment below if you're using React Router
// import { Link } from "react-router-dom";

const Footer = () => {
  const pageLinks = [
    { name: "About Us", path: "/about_hill" },
    { name: "Facilities", path: "/about_facility" },
    { name: "Saputara", path: "/Saputara" },
    { name: "Inquiry", path: "/inquiry" },
    { name: "Contact Us", path: "/contact_us" },
  ];

  return (
    <footer className="bg-[#00486c] text-white w-full py-12 px-4">
      <div className="max-w-9xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-center items-center py-8">
          {/* LEFT COLUMN - Navigation Links */}
          <div className="w-full md:w-auto px-6 py-4 md:border-r border-white">
            <ul className="space-y-3 text-[15px] text-center md:text-left">
              {pageLinks.map((link) => (
                <li key={link.name}>
                  {/* Replace <a> with <Link> if using React Router */}
                  <a
                    href={link.path}
                    className="hover:text-white-300 transition-colors"
                  >
                    {link.name}
                  </a>
                  {/* 
                  <Link to={link.path} className="hover:text-white-300 transition-colors">
                    {link.name}
                  </Link>
                  */}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT COLUMN - Resort Info */}
          <div className="w-full md:w-auto px-6 py-4 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">STAR HOLIDAY RESORT</h2>
            <p className="text-lg mb-4 text-white-300">BEST RATE GUARANTEE</p>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-3 mb-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-[#333] p-2 rounded-full text-white hover:bg-[#555] transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                )
              )}
            </div>

            <p className="text-[13px] text-white-400 tracking-wider">
              CONNECT WITH STAR HOLIDAY RESORT
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#fff1f1] pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-[15px]">
            {/* <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
              {[
                "Terms of Use",
                "Privacy Policy",
                "Cancellation Policy",
                "Security Safety",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-white-300 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div> */}
            <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
              <p>© 2025 Copyright: Star Holiday Resort All Rights Reserved.</p>
            </div>
            <p className="text-center md:text-right">
              Web Design By Rich System Solution Nashik
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
