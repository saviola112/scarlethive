import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import SocialFloat from "../components/SocialFloat";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello Scarlethive Beauty Salon

Name: ${formData.name}

Phone: ${formData.phone}

Service: ${formData.service}

Date: ${formData.date}

Time: ${formData.time}

Notes: ${formData.notes}
`;

    window.open(
      `https://wa.me/2348060895084?text=${encodeURIComponent(message)}`,
    );
  };

  return (
    <div>
      <Navbar />

      <section className="py-24 bg-[#fff8f7]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center">
            <p className="uppercase tracking-[5px] text-[#6b1035]">
              Appointment
            </p>

            <h1 className="text-5xl font-black mt-4">Book Your Session</h1>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-[30px] p-10 mt-12 space-y-6"
          >
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
            />

            <select
              name="service"
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
            >
              <option>Select Service</option>

              <option>Hair Styling</option>

              <option>Nail Care</option>

              <option>Spa & Wellness</option>

              <option>Makeup</option>
            </select>

            <input
              type="date"
              name="date"
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
            />

            <input
              type="time"
              name="time"
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
            />

            <textarea
              name="notes"
              placeholder="Additional Notes"
              rows="4"
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
            />

            <a
              href="https://wa.me/2348060895084?text=Hello%20Scarlethive,%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noreferrer"
              className="bg-[#7b123b] px-8 py-4 rounded-full text-white font-bold hover:scale-105 duration-300"
            >
              Book Appointment
            </a>
          </form>
        </div>
      </section>
      <SocialFloat />

      <Footer />
    </div>
  );
}

export default Booking;
