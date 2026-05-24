function GalleryPreview() {
  const gallery = [
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",

    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800",

    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800",

    "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800",
  ];

  return (
    <section className="py-24 bg-[#fff8f7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="uppercase tracking-[5px] text-[#6b1035]">
            Beauty Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Moments of Beauty & Care
          </h2>

          <p className="text-gray-500 mt-5">
            A glimpse into beauty experiences at Scarlethive.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[30px] shadow-lg"
            >
              <img
                src={image}
                alt="Beauty"
                className="w-full h-80 object-cover hover:scale-110 duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryPreview;
