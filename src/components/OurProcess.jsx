import { motion } from "framer-motion";

function OurProcess() {
  const steps = [
    {
      number: "01",
      title: "Book Appointment",
      description:
        "Choose your preferred beauty service and schedule your session.",
    },

    {
      number: "02",
      title: "Consultation",
      description: "Discuss your style, treatment goals and preferences.",
    },

    {
      number: "03",
      title: "Beauty Experience",
      description:
        "Relax while our specialists provide your selected treatment.",
    },

    {
      number: "04",
      title: "Glow & Return",
      description:
        "Leave refreshed and come back for your next beauty experience.",
    },
  ];

  return (
    <section className="py-24 bg-transparent" data-aos="zoom-in">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="uppercase tracking-[5px] text-[#7b123b]">Our Process</p>

          <h2 className="text-5xl font-bold mt-4">How Scarlethive Works</h2>

          <p className="text-gray-500 mt-4">
            A smooth beauty experience from booking to transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#fff8f7] rounded-[30px] p-8 shadow-xl hover:-translate-y-4 hover:shadow-2xl transition-all duration-500"
            >
              <div className="text-5xl font-black text-[#7b123b]">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold mt-6">{step.title}</h3>

              <p className="mt-4 text-gray-500">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurProcess;
