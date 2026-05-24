import { motion } from "framer-motion";

function BeautyPackages() {
  const packages = [
    {
      title: "Glow Package",
      price: "₦25,000",
      includes: "Hair Styling • Nails • Facial",
    },

    {
      title: "Luxury Package",
      price: "₦40,000",
      includes: "Hair • Spa • Nails • Makeup",
    },

    {
      title: "Self-Care Package",
      price: "₦18,000",
      includes: "Spa • Facial • Relaxation",
    },
  ];

  return (
    <section className="py-24 bg-[#fff8f7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="uppercase tracking-[5px] text-[#7b123b]">
            Special Packages
          </p>

          <h2 className="text-5xl font-bold mt-5">
            Beauty Offers Designed For You
          </h2>

          <p className="text-gray-500 mt-4">
            Choose a beauty experience that fits your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {packages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-[30px] p-10 shadow-xl hover:-translate-y-4 duration-300"
            >
              <h3 className="text-3xl font-bold">{item.title}</h3>

              <h2 className="text-[#7b123b] text-4xl mt-5 font-bold">
                {item.price}
              </h2>

              <p className="mt-5 text-gray-500">{item.includes}</p>

              <button className="mt-8 bg-[#7b123b] text-white px-6 py-3 rounded-full">
                Choose Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeautyPackages;
