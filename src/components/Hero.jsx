import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=2000",

    "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=2000",

    "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=2000",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images[currentImage]}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover duration-[2000]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="backdrop-blur-md bg-white/10 p-10 rounded-[40px] max-w-xl border border-white/20"
        >
          <p className="uppercase tracking-[6px] text-pink-300 text-sm">
            Hair • Nails • Spa • Wellness
          </p>

          <h1 className="text-white text-5xl md:text-7xl font-bold mt-5 leading-tight">
            Beauty Made Personal
          </h1>

          <p className="text-white/90 mt-6 text-lg">
            Professional beauty experiences designed around you.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <a
              href="https://wa.me/2348060895084?text=Hello%20Scarlethive,%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noreferrer"
              className="bg-[#7b123b] px-8 py-4 rounded-full text-white font-bold hover:scale-105 duration-300"
            >
              Book Appointment
            </a>

            <Link
              to="/services"
              className="bg-white px-8 py-4 rounded-full font-bold hover:scale-105 duration-300"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
