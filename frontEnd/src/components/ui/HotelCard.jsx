import { Link } from "react-router-dom";

export default function HotelCard({ hotel }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
      
      {/* Ảnh khách sạn */}
      <img
        src={
          hotel.image_url ||
          "https://via.placeholder.com/400x300?text=No+Image"
        }
        alt={hotel.name}
        className="h-48 w-full object-cover rounded-t-xl"
      />

      <div className="p-4 space-y-2">
        
        {/* Tên khách sạn */}
        <h3 className="font-semibold text-lg">
          {hotel.name || "Tên khách sạn"}
        </h3>

        {/* Địa chỉ (nếu có) */}
        {hotel.address && (
          <p className="text-sm text-gray-500">
            {hotel.address}
          </p>
        )}

        {/* Giá từ */}
        <p className="text-orange-500 font-bold">
          {hotel.min_price
            ? `Từ ${hotel.min_price.toLocaleString()}đ / đêm`
            : "Xem giá phòng"}
        </p>

        {/* Nút xem phòng */}
        <Link
          to={`/rooms/${hotel._id}`}
          className="block mt-3 bg-orange-500 text-white py-2 rounded text-center hover:bg-orange-600"
        >
          Xem phòng
        </Link>
      </div>
    </div>
  );
}
