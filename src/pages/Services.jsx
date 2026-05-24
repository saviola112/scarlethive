import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Services() {
  const sections = [
    {
      title: "Hair Services",
      emoji: "💇🏽‍♀️",
      services: [
        {
          name: "Braids & Protective Styles",
          details:
            "Knotless braids, box braids, twists, cornrows and customized protective styles.",
        },

        {
          name: "Wig Installation",
          details:
            "Professional installation, fitting and styling for a seamless natural finish.",
        },

        {
          name: "Hair Treatments",
          details:
            "Deep conditioning, moisture restoration and strengthening treatments.",
        },

        {
          name: "Hair Extensions",
          details:
            "Length and volume enhancement with professionally applied extensions.",
        },

        {
          name: "Hair Styling",
          details:
            "Daily styling, event styling and special occasion hair looks.",
        },

        {
          name: "Hair Wash & Maintenance",
          details:
            "Scalp care, washing, conditioning and maintenance services.",
        },
      ],
    },

    {
      title: "Nail Services",
      emoji: "💅🏽",
      services: [
        {
          name: "Manicure",
          details: "Nail shaping, grooming and polish application.",
        },

        {
          name: "Pedicure",
          details: "Foot care treatments focused on relaxation and appearance.",
        },

        {
          name: "Acrylic Nails",
          details: "Durable nail extensions with customizable styles.",
        },

        {
          name: "Gel Nails",
          details:
            "Glossy long-lasting nail finish with professional application.",
        },

        {
          name: "Nail Art",
          details: "Creative custom nail designs and beauty detailing.",
        },

        {
          name: "Nail Maintenance",
          details: "Refills, reshaping and care for healthy-looking nails.",
        },
      ],
    },

    {
      title: "Beauty & Wellness",
      emoji: "✨",
      services: [
        {
          name: "Lashes",
          details: "Lash enhancement and styling for fuller looks.",
        },

        {
          name: "Brows",
          details: "Brow shaping and beauty styling.",
        },

        {
          name: "Facials",
          details:
            "Skin care treatments designed to refresh and nourish the skin.",
        },

        {
          name: "Spa Experience",
          details:
            "Relaxation treatments designed around comfort and wellness.",
        },

        {
          name: "Massage & Relaxation",
          details:
            "Self-care experiences focused on relaxation and rejuvenation.",
        },

        {
          name: "Beauty Consultation",
          details: "Personalized guidance for your preferred beauty goals.",
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
                    <div key={idx} className="border-b border-pink-100 py-4">
                      <h4 className="font-bold">{service.name}</h4>

                      <p className="text-sm text-gray-500 mt-2">
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
