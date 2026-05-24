import { useState } from "react";
import galleryData from "../data/galleryData";

function RealGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Hair", "Nails", "Beauty", "Salon"];

  const filteredImages =
    activeFilter === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeFilter);

  return (
    <section className="py-20 px-6">
      <div className="flex justify-center gap-3 flex-wrap mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full duration-300 ${
              activeFilter === filter
                ? "bg-[#7b123b] text-white"
                : "bg-white shadow"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {filteredImages.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-[30px] shadow-xl cursor-pointer hover:-translate-y-2 duration-300"
            onClick={() => setSelectedImage(item.image)}
          >
            <img
              src={item.image}
              alt=""
              loading="lazy"
              className="w-full h-[350px] object-cover hover:scale-110 duration-700"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
        >
          <img
            src={selectedImage}
            alt=""
            className="max-w-full max-h-[90vh] rounded-[30px]"
          />
        </div>
      )}
    </section>
  );
}

export default RealGallery;
