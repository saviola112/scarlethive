import { motion } from "framer-motion";

function WhyChoose() {
  const reasons = [
    {
      icon: "✨",
      title: "Beauty Experts",
      text: "Professional beauty specialists dedicated to delivering quality service.",
    },

    {
      icon: "💖",
      title: "Relaxing Experience",
      text: "A welcoming environment designed around comfort and care.",
    },

    {
      icon: "🌸",
      title: "Personal Care",
      text: "Beauty experiences tailored around individual preferences.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="uppercase tracking-[5px] text-[#7b123b]">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold mt-5">Your Beauty, Our Priority</h2>

          <p className="text-gray-500 mt-5">
            Designed to make every visit feel luxurious.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#fff8f7] rounded-[30px] p-10 shadow-lg hover:-translate-y-3 hover:shadow-2xl duration-300"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="text-2xl font-bold mt-6">{item.title}</h3>

              <p className="text-gray-500 mt-4">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
