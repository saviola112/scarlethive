import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SkeletonCard from "./SkeletonCard";

function ServicesPreview() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: "💇‍♀️",
      title: "Hair Styling",
      description:
        "Professional styling, braids, wig installations and treatments.",
      image:
        "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800",
    },

    {
      icon: "💅",
      title: "Nail Care",
      description: "Manicure, pedicure, acrylic and nail art services.",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800",
    },

    {
      icon: "🧖‍♀️",
      title: "Spa & Wellness",
      description: "Relaxing treatments designed around beauty and wellbeing.",
      image:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
    },
  ];

  return (
    <section className="py-24 bg-transparent" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="uppercase tracking-[5px] text-[#7b123b]">
            Our Services
          </p>

          <h2 className="text-5xl font-bold mt-5">
            Beauty Designed Around You
          </h2>

          <p className="text-gray-500 mt-4">
            Treatments and experiences designed to help you feel your best.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {loading
            ? [...Array(3)].map((_, index) => <SkeletonCard key={index} />)
            : services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -15 }}
                  className="bg-white rounded-[35px] overflow-hidden shadow-xl"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-72 object-cover"
                  />

                  <div className="p-8">
                    <div className="text-4xl">{service.icon}</div>

                    <h3 className="text-2xl font-bold mt-4">{service.title}</h3>

                    <p className="text-gray-500 mt-4">{service.description}</p>

                    <a
                      href="/services"
                      className="inline-block mt-6 bg-[#7b123b] text-white px-6 py-3 rounded-full hover:scale-105 duration-300"
                    >
                      Explore Service
                    </a>
                  </div>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
