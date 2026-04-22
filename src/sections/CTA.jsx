import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

const CTA = () => {
  return (
    <section
      className="
        py-10 md:py-16 
        px-4 
        bg-gradient-to-r from-blue-500 to-sky-500 
        text-white text-center
        scroll-mt-24
      "
      style={{ fontFamily: "'Baloo 2', 'Fredoka', sans-serif" }}
    >
      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">Siap Buat Acara Seru?</h2>

      {/* SUBTITLE */}
      <p className="mb-6 text-sm sm:text-base md:text-lg opacity-90">Booking sekarang dan dapatkan pengalaman terbaik</p>

      {/* BUTTON WHATSAPP */}
      <div className="flex justify-center">
        <a
          href="https://wa.me/6282210109500"
          target="_blank"
          className="
            w-full sm:w-auto
            inline-flex justify-center items-center gap-3
            bg-green-500 hover:bg-green-600
            text-white 
            px-6 py-3 
            rounded-full 
            font-semibold 
            shadow-lg 
            transition 
            active:scale-95 hover:scale-105
            mt-10
          "
        >
          <FaWhatsapp className="text-xl sm:text-2xl" />
          <span className="text-sm sm:text-base">Booking Sekarang</span>
        </a>
      </div>

      {/* SOCIAL MEDIA */}
      <div
        className="
          mt-8 
          flex flex-col sm:flex-row 
          justify-center items-center 
          gap-4 sm:gap-8
        "
      >
        <a
          href="https://www.instagram.com/newkampoengkalibotowaterboom/"
          target="_blank"
          className="
            flex items-center gap-2 
            text-sm sm:text-base
            hover:opacity-80 transition
            break-all
          "
        >
          <FaInstagram className="text-xl" />
          <span>@newkampoengkalibotowaterboom</span>
        </a>

        <a
          href="https://www.tiktok.com/@kampoengkaliboto"
          target="_blank"
          className="
            flex items-center gap-2 
            text-sm sm:text-base
            hover:opacity-80 transition
          "
        >
          <FaTiktok className="text-xl" />
          <span>@kampoengkaliboto</span>
        </a>
      </div>

      {/* FOOTER */}
      <div className="mt-8 opacity-70 text-xs sm:text-sm">Developed by: Dutalabs</div>
    </section>
  );
};

export default CTA;
