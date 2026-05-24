import { useState } from "react";

function Faq() {
  const faqs = [
    {
      question: "Do I need an appointment?",
      answer:
        "Appointments are recommended, but you can also contact us on WhatsApp or Instagram for availability.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We provide hair styling, nails, lashes, beauty treatments and wellness services.",
    },
    {
      question: "How do I book?",
      answer:
        "Simply click the Book Appointment button and continue on WhatsApp.",
    },
    {
      question: "Where are you located?",
      answer: "11B Barr Obinna Okwara Crescent, Area B, New Owerri.",
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <p className="uppercase tracking-[5px] text-[#7b123b]">FAQs</p>

          <h2 className="text-5xl font-bold mt-5">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#fff8f7] rounded-[25px] p-6 shadow-md cursor-pointer"
              onClick={() => setOpen(open === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold">{faq.question}</h3>

                <span>{open === index ? "−" : "+"}</span>
              </div>

              {open === index && (
                <p className="text-gray-500 mt-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
