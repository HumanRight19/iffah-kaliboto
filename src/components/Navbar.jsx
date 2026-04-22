import logo from "../assets/kaliboto-logo.png";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/80 border-b border-white/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-24 md:h-28">
        {/* LOGO SUPER BESAR */}
        <div className="flex items-center h-full">
          <img src={logo} alt="Logo" className="h-full w-auto object-contain" />
        </div>

        {/* NAV MENU */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-semibold" style={{ fontFamily: "'Baloo 2', 'Fredoka', sans-serif" }}>
          <a href="#home" className="text-gray-800 hover:text-blue-500 transition">
            Beranda
          </a>
          <a href="#katalog" className="text-gray-600 hover:text-blue-500 transition">
            Paket Wisata
          </a>
          <a href="#portofolio" className="text-gray-600 hover:text-blue-500 transition">
            Portofolio
          </a>
          <a href="#fasilitas" className="text-gray-600 hover:text-blue-500 transition">
            Fasilitas
          </a>
        </nav>

        {/* CTA */}
        <a href="https://wa.me/6282210109500" target="_blank" className="bg-blue-500 text-white px-6 py-2 rounded-full text-md font-semibold hover:bg-blue-600 transition" style={{ fontFamily: "'Baloo 2', 'Fredoka', sans-serif" }}>
          Booking
        </a>
      </div>
    </header>
  );
};

export default Navbar;
