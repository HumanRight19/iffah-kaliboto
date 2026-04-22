import { useState } from "react";
import ImageModal from "../components/ImageModal";

const tabs = ["reguler", "paket", "makanan"];

const data = {
  reguler: [
    {
      title: "Tiket Masuk",
      cover: "/cover-katalog/15.png",
      images: ["/katalog/tiket-masuk.jpg"],
    },
  ],
  paket: [
    {
      title: "Paket Belajar & Bersenang Senang",
      cover: "/cover-katalog/13.png",
      images: ["/katalog/paket-senang-senang-a-b.jpg", "/katalog/paket-senang-senang-c.jpg"],
    },
    {
      title: "Paket Terusan",
      cover: "/cover-katalog/14.png",
      images: ["/katalog/paket-terusan-dolan.jpeg"],
    },
    {
      title: "Paket Sunnah",
      cover: "/cover-katalog/1.png",
      images: ["/katalog/paket-sunnah.jpg"],
    },
    {
      title: "Cooking Class",
      cover: "/cover-katalog/2.png",
      images: ["/katalog/cooking-class.jpg"],
    },
    {
      title: "Birthday",
      cover: "/cover-katalog/3.png",
      images: ["/katalog/birthday-package.jpg"],
    },
  ],
  makanan: [
    {
      title: "Paket Prasmanan",
      cover: "/cover-katalog/4.png",
      images: ["/katalog/menu-prasmanan-a-d.jpg", "/katalog/menu-prasmanan-e-f.jpg"],
    },
    {
      title: "Paket Snack",
      cover: "/cover-katalog/11.png",
      images: ["/katalog/paket-snack.jpg"],
    },
    {
      title: "Best Seller",
      cover: "/cover-katalog/5.png",
      images: ["/katalog/best-seller-menu.jpg"],
    },
    {
      title: "Menu Pahe + Minum",
      cover: "/cover-katalog/6.png",
      images: ["/katalog/pahe+minum.jpg"],
    },
    {
      title: "Menu Makan",
      cover: "/cover-katalog/7.png",
      images: ["/katalog/menu-makan-alacarte.jpg"],
    },
    {
      title: "Menu Snack & Minum",
      cover: "/cover-katalog/8.png",
      images: ["/katalog/menu-snack-makan-alacarte.jpg"],
    },
  ],
};

const Catalog = () => {
  const [activeTab, setActiveTab] = useState("paket");
  const [selectedImages, setSelectedImages] = useState(null);

  return (
    <section id="katalog" className="py-20 px-6 bg-white scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-7xl md:text-8xl lg:text-9xl font-black text-center 
  mb-32
  tracking-tight leading-[1.05] drop-shadow-xl"
          style={{ fontFamily: "'Baloo 2', 'Fredoka', sans-serif" }}
        >
          <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">Pilih Paket Serumu!</span>
        </h1>

        {/* TAB */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition
              ${activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"}`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* CARD GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data[activeTab].map((item, i) => (
            <div key={i} onClick={() => setSelectedImages(item.images)} className="group cursor-pointer rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300">
              {/* IMAGE WRAPPER */}
              <div className="relative h-60 w-full overflow-hidden">
                {/* IMAGE */}
                <img
                  src={item.cover || item.images[0]}
                  alt={item.title}
                  className="h-full w-full object-cover 
                  transition-transform duration-500 
                  group-hover:scale-110"
                />

                {/* GRADIENT OVERLAY */}
                <div
                  className="absolute inset-0 
                  bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                  opacity-80 group-hover:opacity-100 transition"
                />

                {/* TITLE FLOAT */}
                <div className="absolute bottom-0 left-0 p-4">
                  <h3
                    className="text-white text-lg font-semibold 
                  translate-y-2 group-hover:translate-y-0 
                  transition-transform duration-300"
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        <ImageModal isOpen={!!selectedImages} onClose={() => setSelectedImages(null)} images={selectedImages} />
      </div>
    </section>
  );
};

export default Catalog;
