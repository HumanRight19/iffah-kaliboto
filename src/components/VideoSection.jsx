import { useState, useRef } from "react";

const VideoSection = ({ data }) => {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(data[0]?.title || "");
  const videoRefs = useRef([]);

  const tabs = data.map((item) => item.title);

  // Ambil data kategori aktif
  const currentData = data.find((item) => item.title === activeTab);

  // Filter search (AMAN)
  const filteredVideos = currentData?.videos.filter((video) => {
    const instansi = video.instansi || "";
    return instansi.toLowerCase().includes(search.toLowerCase());
  });

  // Auto pause video lain
  const handlePlay = (index) => {
    videoRefs.current.forEach((vid, i) => {
      if (i !== index && vid) vid.pause();
    });
  };

  return (
    <section id="portofolio" className="py-24 px-4 bg-gradient-to-b from-blue-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* TITLE */}
        <div className="text-center space-y-2">
          <h1
            className="text-7xl md:text-8xl lg:text-9xl font-black text-center 
  mb-32
  tracking-tight leading-[1.05] drop-shadow-xl"
          >
            <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">Lihat Keseruannya!</span>
          </h1>
        </div>

        {/* TAB (SCROLLABLE MOBILE) */}
        <div className="flex flex-wrap justify-center gap-3 text-lg" style={{ fontFamily: "'Baloo 2', 'Fredoka', sans-serif" }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSearch(""); // reset search
                videoRefs.current = [];
              }}
              className={`
        px-5 py-2 rounded-full text-sm font-medium transition
        ${activeTab === tab ? "bg-blue-500 text-white shadow" : "bg-white text-gray-600 border hover:bg-gray-50"}
      `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* SEARCH */}
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder={`Cari instansi di ${activeTab}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full px-5 py-3 rounded-full 
              bg-white shadow-sm border border-gray-200
              focus:outline-none focus:ring-2 focus:ring-blue-400
            "
          />
        </div>

        {/* EMPTY */}
        {filteredVideos?.length === 0 && <p className="text-center text-gray-400">Belum ada video pada kategori ini</p>}

        {/* VIDEO LIST */}
        <div
          className="
          flex md:grid
          md:grid-cols-3 lg:grid-cols-4
          gap-5
          overflow-x-auto md:overflow-visible
          snap-x snap-mandatory
          scroll-smooth
          pb-2
          "
        >
          {filteredVideos?.map((video, i) => (
            <div
              key={i}
              className="
              group
              relative
              min-w-[240px] sm:min-w-[280px] md:min-w-0
              snap-center
              rounded-2xl
              bg-white
              shadow-md hover:shadow-xl
              transition-all duration-300
              overflow-hidden
              flex flex-col
              "
            >
              {/* VIDEO */}
              <div className="flex justify-center items-center bg-gray-100">
                <video ref={(el) => (videoRefs.current[i] = el)} onPlay={() => handlePlay(i)} src={video.src} className="max-h-[65vh] w-auto object-contain" controls />
              </div>

              {/* INFO */}
              <div
                className="
                  p-5
                  bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600
                text-white
                  rounded-b-2xl
                  flex flex-col justify-between  
                  min-h-[110px] md:min-h-[120px] 
                "
                style={{ fontFamily: "'Baloo 2', 'Fredoka', sans-serif" }}
              >
                <div className="text-base md:text-lg font-bold leading-tight line-clamp-2">{video.instansi}</div>

                <div className="text-sm md:text-base opacity-90 mt-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="line-clamp-1">{video.paket}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
