import { Link } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="h-48 w-full object-cover"
      />

      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg">{hotel.name}</h3>
        <p className="text-sm text-gray-500">{hotel.location}</p>

        <div className="flex justify-between items-center pt-2">
          <span className="text-orange-500 font-bold">
            {hotel.price.toLocaleString()}đ / đêm
          </span>
          <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
            ⭐ {hotel.rating}
          </span>
        </div>

        <Link
          to={`/rooms/${hotel.id}`}
          className="block w-full mt-3 bg-orange-500 text-white py-2 rounded text-center hover:bg-orange-600"
        >
          Xem phòng
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;
