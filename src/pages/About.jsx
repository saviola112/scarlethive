import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Faq from "../components/Faq";

function About() {
  return (
    <div>
      <Navbar />

      <section className="py-24 bg-[#fff8f7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="uppercase tracking-[5px] text-[#6b1035]">
              About Scarlethive
            </p>

            <h1 className="text-5xl md:text-6xl font-black mt-4">
              Beauty Beyond Appearance
            </h1>

            <p className="text-gray-500 mt-6 max-w-3xl mx-auto">
              Scarlethive Beauty Salon is designed to create beauty and wellness
              experiences that help women feel confident, refreshed and cared
              for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-20 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000"
                alt="Salon"
                className="rounded-[30px] w-full h-96 object-cover shadow-xl"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold">Our Story</h2>

              <p className="mt-6 text-gray-500 leading-8">
                From hairstyles and nail care to wellness experiences, our goal
                is to create a space where beauty and self-care meet in a
                welcoming environment.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-3xl font-black text-[#6b1035]">100+</h3>

                  <p className="text-gray-500">Happy Clients</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-3xl font-black text-[#6b1035]">4+</h3>

                  <p className="text-gray-500">Beauty Categories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold">
            Contact Information
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-[#fff8f7] p-8 rounded-[30px] shadow-lg">
              <h3 className="font-bold">WhatsApp</h3>

              <p className="mt-4">+2348060895084</p>
            </div>

            <div className="bg-[#fff8f7] p-8 rounded-[30px] shadow-lg">
              <h3 className="font-bold">Address</h3>

              <p className="mt-4">11B Barr Obinna Okwara Crescent, Owerri</p>
            </div>

            <div className="bg-[#fff8f7] p-8 rounded-[30px] shadow-lg">
              <h3 className="font-bold">Hours</h3>

              <p className="mt-4">Mon–Sat: 9am–8pm</p>
            </div>
          </div>
        </div>
      </section>

      <Faq />

      <Footer />
    </div>
  );
}

export default About;
