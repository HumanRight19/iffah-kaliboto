const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden scroll-mt-32">
      {/* VIDEO */}
      <video className="absolute w-full h-full object-cover" src="video/hero/kaliboto-hero.mp4" autoPlay loop muted />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6" style={{ fontFamily: "'Baloo 2', 'Fredoka', sans-serif" }}>
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-tight mb-4">
          Liburan Seru, <br /> Penuh Cerita!
        </h1>

        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl">Nikmati waterboom, outbound, cooking class, hingga birthday party dalam satu tempat yang seru dan edukatif</p>

        <div className="flex gap-4 flex-wrap justify-center my-10">
          {/* KE KATALOG */}
          <a
            href="#katalog"
            className="bg-blue-500 px-6 py-3 rounded-full font-semibold 
      hover:bg-blue-600 hover:scale-105 transition"
          >
            Lihat Paket
          </a>

          {/* KE WHATSAPP */}
          <a
            href="https://wa.me/6282210109500"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold 
      hover:scale-105 transition"
          >
            Booking Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
