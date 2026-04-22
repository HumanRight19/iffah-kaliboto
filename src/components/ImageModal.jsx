import { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageModal = ({ isOpen, onClose, images = [] }) => {
  const [current, setCurrent] = useState(0);
  const [zoom, setZoom] = useState(1);

  // PAN STATE
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const start = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      setCurrent(0);
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    resetTransform();
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    resetTransform();
  };

  const resetTransform = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  // ZOOM
  const zoomIn = () => setZoom((z) => Math.min(z + 0.5, 3));
  const zoomOut = () => {
    setZoom((z) => {
      const newZoom = Math.max(z - 0.5, 1);
      if (newZoom === 1) setPosition({ x: 0, y: 0 });
      return newZoom;
    });
  };

  const handleWheel = (e) => {
    e.stopPropagation();
    if (e.deltaY < 0) zoomIn();
    else zoomOut();
  };

  // DRAG (PAN)
  const onMouseDown = (e) => {
    if (zoom === 1) return;
    dragging.current = true;
    start.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const onMouseMove = (e) => {
    if (!dragging.current) return;
    setPosition({
      x: e.clientX - start.current.x,
      y: e.clientY - start.current.y,
    });
  };

  const onMouseUp = () => {
    dragging.current = false;
  };

  // TOUCH (mobile drag)
  const onTouchStart = (e) => {
    if (zoom === 1) return;
    const touch = e.touches[0];
    dragging.current = true;
    start.current = {
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    };
  };

  const onTouchMove = (e) => {
    if (!dragging.current) return;
    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - start.current.x,
      y: touch.clientY - start.current.y,
    });
  };

  const onTouchEnd = () => {
    dragging.current = false;
  };

  // SWIPE (disable saat zoom)
  const handlers = useSwipeable({
    onSwipedLeft: () => zoom === 1 && nextSlide(),
    onSwipedRight: () => zoom === 1 && prevSlide(),
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  if (!isOpen || !images.length) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4">
      {/* CLOSE */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 bg-red-500 hover:bg-red-600 
        text-white w-11 h-11 rounded-full flex items-center justify-center 
        shadow-xl border-2 border-white transition hover:scale-110"
      >
        ✕
      </button>

      <div className="relative w-full max-w-5xl">
        <div {...handlers} onWheel={handleWheel} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className="relative overflow-hidden rounded-xl select-none">
          <img
            src={images[current]}
            alt="katalog"
            draggable={false}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
              cursor: zoom > 1 ? "grab" : "default",
            }}
            className="w-full max-h-[80vh] object-contain transition-transform duration-200"
          />

          {/* PAGE */}
          <div
            className="absolute top-3 left-1/2 -translate-x-1/2 
          bg-black/50 text-white text-sm px-3 py-1 rounded-full backdrop-blur"
          >
            {current + 1} / {images.length}
          </div>

          {/* NAV */}
          {images.length > 1 && (
            <>
              {/* PREV */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 
      w-12 h-12 flex items-center justify-center 
      rounded-full 
      bg-white/20 backdrop-blur-md 
      border border-white/30 
      text-white 
      shadow-lg
      hover:bg-white/40 hover:scale-110 
      active:scale-95 
      transition"
              >
                <FaChevronLeft className="text-sm" />
              </button>

              {/* NEXT */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 
      w-12 h-12 flex items-center justify-center 
      rounded-full 
      bg-white/20 backdrop-blur-md 
      border border-white/30 
      text-white 
      shadow-lg
      hover:bg-white/40 hover:scale-110 
      active:scale-95 
      transition"
              >
                <FaChevronRight className="text-sm" />
              </button>
            </>
          )}
        </div>

        {/* ZOOM BTN */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div
            className="flex items-center gap-2 
    bg-white/20 backdrop-blur-md 
    border border-white/30 
    rounded-full px-2 py-2 shadow-xl"
          >
            <button
              onClick={zoomOut}
              className="w-10 h-10 flex items-center justify-center 
      rounded-full bg-white/80 hover:bg-white 
      text-gray-800 
      transition hover:scale-105 active:scale-95"
            >
              <FaMinus />
            </button>

            <button
              onClick={zoomIn}
              className="w-10 h-10 flex items-center justify-center 
      rounded-full bg-blue-500 hover:bg-blue-600 
      text-white 
      transition hover:scale-105 active:scale-95"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
