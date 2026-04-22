const PackageCard = ({ title, price, video }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
      <video src={video} autoPlay loop muted className="h-60 w-full object-cover" />

      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-blue-500 font-semibold">{price}</p>

        <button className="mt-3 text-sm text-blue-600">Lihat Detail →</button>
      </div>
    </div>
  );
};

export default PackageCard;
