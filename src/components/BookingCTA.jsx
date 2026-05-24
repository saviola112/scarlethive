function BookingCTA() {
  return (
    <section className="py-20 px-6 bg-[#7b123b] text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
          Ready For Your Beauty Experience?
        </h2>

        <p className="text-white/90 mt-6 text-x1 md:text-xl max-w-3xl mx-auto">
          Book your appointment and enjoy personalized beauty services designed
          around you.
        </p>

        <a
          href="https://wa.me/2348060895084?text=Hello%20Scarlethive,%20I%20would%20like%20to%20book%20an%20appointment."
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-10 bg-white text-[#7b123b] px-8 py-4 rounded-full font-bold hover:scale-105 duration-300"
        >
          Book Appointment
        </a>
      </div>
    </section>
  );
}

export default BookingCTA;
