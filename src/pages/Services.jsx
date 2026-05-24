import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Services() {
  const sections = [
    {
      title: "Hair Services",
      emoji: "💇🏽‍♀️",
      services: [
        {
          name: "Braids",
          details:
            "Knotless braids, box braids, twists and protective styles tailored to your preference.",
        },

        {
          name: "Wig Installation",
          details:
            "Professional wig fitting, styling and installation for a natural finish.",
        },

        {
          name: "Hair Treatment",
          details:
            "Deep conditioning and restorative treatments designed for healthy hair care.",
        },

        {
          name: "Hair Extensions",
          details:
            "Volume and length enhancement using quality extension techniques.",
        },

        {
          name: "Styling",
          details:
            "Hair styling for everyday looks, events and special occasions.",
        },
      ],
    },

    {
      title: "Nail Services",
      emoji: "💅🏽",
      services: [
        {
          name: "Manicure",
          details: "Nail grooming, shaping and polish application.",
        },

        {
          name: "Pedicure",
          details: "Foot care treatment designed for comfort and appearance.",
        },

        {
          name: "Gel Nails",
          details:
            "Long-lasting glossy nail finish with professional application.",
        },

        {
          name: "Nail Art",
          details: "Creative custom nail designs and decorative styles.",
        },

        {
          name: "Acrylic Nails",
          details:
            "Durable extensions and enhancements for stylish nail looks.",
        },
      ],
    },

    {
      title: "Beauty & Wellness",
      emoji: "✨",
      services: [
        {
          name: "Lashes",
          details: "Enhancement services designed to create fuller lash looks.",
        },

        {
          name: "Brows",
          details: "Brow shaping and styling for a refined appearance.",
        },

        {
          name: "Spa",
          details: "Relaxation treatments focused on comfort and wellness.",
        },

        {
          name: "Facials",
          details: "Skin care treatments designed to refresh and nourish.",
        },

        {
          name: "Relaxation Treatments",
          details: "Beauty experiences focused on self-care and wellbeing.",
        },
      ],
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
                  {section.services.map((service, idx) => (
                    <div key={idx} className="mt-5 border-b pb-4">
                      <h4 className="font-bold">{service.name}</h4>

                      <p className="text-gray-500 text-sm mt-2">
                        {service.details}
                      </p>
                    </div>
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
