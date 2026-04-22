const facilities = [
  { name: "Kolam Permainan", image: "/fasilitas/1.png" },
  { name: "Kolam Balita", image: "/fasilitas/2.png" },
  { name: "Kolam Dewasa", image: "/fasilitas/3.png" },
  { name: "Kolam Syari", image: "/fasilitas/4.png" },
  { name: "Mandi Salju", image: "/fasilitas/5.png" },
  { name: "Perosotan", image: "/fasilitas/6.png" },
  { name: "Ember Tumpah", image: "/fasilitas/7.png" },
  { name: "Area Tunggu", image: "/fasilitas/8.png" },
  { name: "Area Bawah", image: "/fasilitas/9.png" },
  { name: "Mushola", image: "/fasilitas/10.png" },
  { name: "Kamar Mandi", image: "/fasilitas/11.png" },
  { name: "Mini Zoo", image: "/fasilitas/12.png" },
  { name: "Spot Foto", image: "/fasilitas/13.png" },
  { name: "Ninja Warrior Kid", image: "/fasilitas/14.png" },
  { name: "Playground", image: "/fasilitas/15.png" },
  { name: "Taman Bunga", image: "/fasilitas/16.png" },
  { name: "Area Outbond", image: "/fasilitas/17.png" },
];

const Facilities = () => {
  return (
    <section id="fasilitas" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 scroll-mt-32">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        {/* TITLE */}
        <div>
          <h1
            className="text-7xl md:text-8xl lg:text-9xl font-black text-center 
  mb-32
  tracking-tight leading-[1.05] drop-shadow-xl"
            style={{ fontFamily: "'Baloo 2', 'Fredoka', sans-serif" }}
          >
            <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">Nikmati Fasilitas Terbaik Kami</span>
          </h1>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {facilities.map((item, i) => (
            <div
              key={i}
              className="
              group
              rounded-2xl overflow-hidden
              bg-white shadow-md hover:shadow-xl
              transition-all duration-300
              "
            >
              {/* IMAGE (FIXED 1:1) */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                  w-full h-full object-cover
                  group-hover:scale-110
                  transition-transform duration-500
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition"></div>
              </div>

              {/* TEXT */}
              <div className="p-3">
                <p className="text-sm font-semibold text-gray-800">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
