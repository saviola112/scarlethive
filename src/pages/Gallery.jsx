import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BeautySlider from "../components/BeautySlider";
import RealGallery from "../components/RealGallery";

function Gallery() {
  return (
    <div>
      <Navbar />

      <section className="bg-[#fff8f7] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="uppercase tracking-[5px] text-[#7b123b]">
              Beauty Gallery
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mt-5">
              Explore Beauty Moments
            </h1>

            <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
              Discover hairstyles, nail artistry, beauty experiences and
              transformations from Scarlethive.
            </p>
          </div>

          <BeautySlider />

          <RealGallery />
        </div>
      </section>

      <section className="py-20 bg-transparent" data-aos="fade-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="uppercase tracking-[5px] text-[#7b123b]">Instagram</p>

            <h2 className="text-4xl font-bold mt-5">
              Follow Our Beauty Journey
            </h2>

            <p className="text-gray-500 mt-5">
              See more updates and beauty content from Scarlethive.
            </p>

            <a
              href="https://instagram.com/scarlethivebeautysalon"
              target="_blank"
              className="inline-block mt-10 bg-[#7b123b] text-white px-8 py-4 rounded-full hover:scale-105 duration-300"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Gallery;
