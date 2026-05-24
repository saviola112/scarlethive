function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-pink-300">Scarlethive</h2>

            <p className="text-gray-400 mt-4">
              Beauty salon experiences designed around care, confidence and
              wellness.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-5">Services</h3>

            <ul className="space-y-2 text-gray-400">
              <li>Hair Styling</li>
              <li>Nail Care</li>
              <li>Spa</li>
              <li>Beauty Treatments</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6">Connect With Us</h3>

            <div className="space-y-4 text-gray-300">
              <p>
                📸 Instagram <br />
                @scarlethivebeautysalon
              </p>

              <p>
                💬 WhatsApp <br />
                +234 806 089 5084
              </p>

              <p>
                📍 11B Barr Obinna Okwara Crescent,
                <br />
                Area B, New Owerri
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-5">Opening Hours</h3>

            <ul className="space-y-2 text-gray-400">
              <li>Mon–Sat: 9am–8pm</li>
              <li>Sun: 1pm–8pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">
          © 2026 Scarlethive Beauty Salon
        </div>
      </div>
    </footer>
  );
}

export default Footer;
