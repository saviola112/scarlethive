import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Services() {
  const sections = [
    {
      title: "Hair Services",
      emoji: "💇🏽‍♀️",
      items: [
        "Braids",
        "Wig Installation",
        "Hair Treatment",
        "Hair Extensions",
        "Styling",
      ],
    },

    {
      title: "Nail Services",
      emoji: "💅🏽",
      items: ["Manicure", "Pedicure", "Gel Nails", "Nail Art", "Acrylic Nails"],
    },

    {
      title: "Beauty & Wellness",
      emoji: "✨",
      items: ["Lashes", "Brows", "Spa", "Facials", "Relaxation Treatments"],
    },
  ];

  return (
    <div>
      <Navbar />

      <section className="py-24 bg-[#fff8f7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="uppercase tracking-[5px] text-[#7b123b">Services</p>

            <h1 className="text-5xl font-bold mt-5">
              Beauty Services Designed Around You
            </h1>

            <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
              Discover beauty services created to help you feel confident and
              refreshed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {sections.map((section, index) => (
              <div
                key={index}
                className="py-24 bg-transparent p-10 rounded-[30px] shadow-xl"
              >
                <div className="text-5xl">{section.emoji}</div>

                <h2 className="text-2xl font-bold mt-6">{section.title}</h2>

                <ul className="mt-6 space-y-4">
                  {section.items.map((item, idx) => (
                    <li key={idx}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Services;
