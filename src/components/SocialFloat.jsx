import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function SocialFloat() {
  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-4 z-50">
      <a
        href="https://instagram.com/scarlethivebeautysalon"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-xl hover:scale-110 duration-300"
      >
        <FaInstagram size={24} />
      </a>

      <a
        href="https://wa.me/2348060895084"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 duration-300"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>
    </div>
  );
}

export default SocialFloat;
