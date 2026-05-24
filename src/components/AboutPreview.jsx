function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="uppercase tracking-[5px] text-[#7b123b]">
          About Scarlethive
        </p>

        <h2 className="text-5xl font-bold mt-5">Beauty Beyond Appearance</h2>

        <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
          Creating beauty experiences that help women feel confident, refreshed
          and cared for.
        </p>

        <a
          href="/about"
          className="inline-block mt-10 bg-[#7b123b] text-white px-8 py-4 rounded-full"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}

export default AboutPreview;
