function Testimonials() {
  return (
    <section className="py-24 bg-transparent" data-aos="fade-right">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="uppercase tracking-[5px] text-[#7b123b]">
            Client Stories
          </p>

          <h2 className="text-5xl font-bold mt-5">
            Real Experiences Coming Soon
          </h2>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
            Scarlethive client transformations and experiences will appear here
            as real reviews and feedback are collected.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-[#fff8f7] p-10 rounded-[30px] shadow-md text-center">
            <div className="text-5xl mb-4">💇🏽‍♀️</div>

            <h3 className="font-bold text-xl">Hair Transformations</h3>

            <p className="text-gray-500 mt-4">
              Future client hairstyle stories and transformations.
            </p>
          </div>

          <div className="bg-[#fff8f7] p-10 rounded-[30px] shadow-md text-center">
            <div className="text-5xl mb-4">💅🏽</div>

            <h3 className="font-bold text-xl">Nail Experiences</h3>

            <p className="text-gray-500 mt-4">
              Real client experiences and nail artistry highlights.
            </p>
          </div>

          <div className="bg-[#fff8f7] p-10 rounded-[30px] shadow-md text-center">
            <div className="text-5xl mb-4">✨</div>

            <h3 className="font-bold text-xl">Beauty Journey</h3>

            <p className="text-gray-500 mt-4">
              Your Scarlethive beauty journey could be featured here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
