import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function Faq() {
  const faqs = [
    {
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment directly through our WhatsApp button or send us a message on Instagram. Our team will guide you through the booking process.",
    },

    {
      question: "Do I pay online before booking?",
      answer:
        "No. Online payment is currently not available. After contacting us through WhatsApp or Instagram, our team will provide the next steps.",
    },

    {
      question: "What beauty services do you offer?",
      answer:
        "We provide hair styling, braids, wig installation, hair treatments, nail care, manicures, pedicures, acrylic nails, lashes, brows, spa and wellness treatments.",
    },

    {
      question: "Do I need to book before visiting?",
      answer:
        "Appointments are recommended to ensure availability and reduce waiting time.",
    },

    {
      question: "What are your opening hours?",
      answer: "Monday–Saturday: 9:00am–8:00pm | Sunday: 1:00pm–8:00pm",
    },

    {
      question: "Where is Scarlethive located?",
      answer: "11B Barr Obinna Okwara Crescent, Area B, New Owerri.",
    },

    {
      question: "Can I come with inspiration photos?",
      answer:
        "Yes. You can share hairstyle, nail, lash or beauty inspiration photos so our specialists understand your preferred look.",
    },

    {
      question: "How long do appointments usually take?",
      answer:
        "Appointment duration varies depending on the service. Some treatments take less than an hour while more detailed services may take several hours.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <p className="uppercase tracking-[5px] text-[#7b123b]">FAQ</p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-500 mt-5">
            Everything you may want to know before your beauty experience.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-[25px] shadow-lg p-6 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">{faq.question}</h3>

                <FaChevronDown
                  className={`duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {openIndex === index && (
                <p className="mt-5 text-gray-500">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
