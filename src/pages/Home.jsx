import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesPreview from "../components/ServicesPreview";
import BookingCTA from "../components/BookingCTA";
import Footer from "../components/Footer";
import WhyChoose from "../components/WhyChoose";
import BeautySlider from "../components/BeautySlider";
import OurProcess from "../components/OurProcess";
import Faq from "../components/Faq";

function Home() {
  return (
    <div>
      <Navbar />

      <Hero />

      <ServicesPreview />

      <WhyChoose />

      <OurProcess />

      <BeautySlider />

      <BookingCTA />

      <Faq />

      <Footer />
    </div>
  );
}

export default Home;
