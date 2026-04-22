import Navbar from "./components/Navbar";
import Catalog from "./sections/Catalog";
import Hero from "./sections/Hero";
import Facilities from "./sections/Facilities";
import VideoSection from "./components/VideoSection";
import videoData from "./data/videoData";
import CTA from "./sections/CTA";

function App() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <Hero />
      <Catalog />
      <VideoSection data={videoData} />
      <Facilities />
      <CTA />
    </div>
  );
}

export default App;
