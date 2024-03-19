import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const closeDropdownOnOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", closeDropdownOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeDropdownOnOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const scrollToAboutSection = () => {
    const aboutSection = document.getElementById("About");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sticky w-full mb-32">
      <nav className="flex text-white text-xl items-center h-16 w-full z-[99]">
        <ul className="inline">
          <li className="inline px-4">
            <Link
              to="/"
              className="border border-transparent hover:border-white rounded-lg px-2 py-1 hover:bg-gray-800 uppercase transition duration-250"
            >
              Home
            </Link>
          </li>
          <li className="inline px-4 relative" ref={dropdownRef}>
            <Link
              to="#"
              className="border border-transparent hover:border-white rounded-lg px-2 py-1 hover:bg-gray-800 uppercase transition duration-250"
              onClick={toggleDropdown}
            >
              Solutions
            </Link>
            <ul
              className={`absolute left-0 mt-2 px-4 py-2 rounded-lg border-transparent bg-gray-700 ${
                isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              style={{ transition: "opacity 0.3s, visibility 0.3s" }}
            >
              <DropdownItem
                to="/SMSFraud"
                text="SMS Fraud"
                onClick={closeDropdown}
              />
              <DropdownItem
                to="/FraudTransactions"
                text="Credit Fraud"
                onClick={closeDropdown}
              />
              <DropdownItem
                to="/Phishing"
                text="Phishing"
                onClick={closeDropdown}
              />
              <DropdownItem to="/RL" text="RL" onClick={closeDropdown} />
            </ul>
          </li>
          <li className="inline px-4">
            <button
              onClick={scrollToAboutSection}
              className="border border-transparent hover:border-white rounded-lg px-2 py-1 hover:bg-gray-800 uppercase transition duration-250"
            >
              About Us
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const DropdownItem = ({ to, text, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    onClick(); // Close the dropdown
  };

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="transition-opacity duration-250"
    >
      <Link
        to={to}
        className={`block px-4 py-3 rounded-full text-white text-sm ${
          isHovered ? "bg-gray-800" : ""
        }`}
        style={{
          transition: "background-color 0.3s ease",
        }}
        onClick={handleClick}
      >
        {text}
      </Link>
    </li>
  );
};

export default Navbar;
