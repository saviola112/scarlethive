import { useState } from "react";
import { Link } from "react-router-dom";
import scarlethiveLogo from "../assets/scarlethive-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img src={scarlethiveLogo} alt="Scarlethive" className="h-12" />

        <div className="hidden lg:flex gap-8 items-center">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>

          <a
            href="https://wa.me/2348060895084"
            target="_blank"
            rel="noreferrer"
            className="bg-[#7b123b] text-white px-6 py-3 rounded-full"
          >
            Book Appointment
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-2xl">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden absolute top-full left-0 w-full
    bg-white/95 backdrop-blur-xl
    px-8 py-8 shadow-2xl rounded-b-[30px]
    border-t border-pink-100
    animate-fadeIn"
        >
          <div className="flex flex-col gap-6 text-center">
            <Link
              to="/"
              className="text-lg font-semibold hover:text-[#7b123b] transition-all duration-300 hover:translate-x-2"
            >
              Home
            </Link>

            <Link
              to="/services"
              className="text-lg font-semibold hover:text-[#7b123b] transition-all duration-300 hover:translate-x-2"
            >
              Services
            </Link>

            <Link
              to="/gallery"
              className="text-lg font-semibold hover:text-[#7b123b] transition-all duration-300 hover:translate-x-2"
            >
              Gallery
            </Link>

            <Link
              to="/about"
              className="text-lg font-semibold hover:text-[#7b123b] transition-all duration-300 hover:translate-x-2"
            >
              About
            </Link>

            <a
              href="https://wa.me/2348060895084"
              target="_blank"
              rel="noreferrer"
              className="mt-4 bg-[#7b123b] text-white py-4 rounded-full font-bold"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
