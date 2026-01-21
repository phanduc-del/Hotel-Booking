import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function RoomDetailPage() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5001/api/rooms/${id}`
        );
        setRoom(res.data);
      } catch (err) {
        console.error("Lỗi lấy chi tiết phòng", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id]);

  if (loading) return <div className="p-6">Đang tải...</div>;
  if (!room) return <div className="p-6">Không tìm thấy phòng</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <img
        src={room.type.image_url}
        className="w-full h-[400px] object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold">{room.type.name}</h1>

      <p>Tiện ích: {room.type.amenities}</p>

      <p className="text-orange-500 text-xl font-bold">
        {room.type.price_daily.toLocaleString()}đ / đêm
      </p>

      <Link to={`/booking/${room._id}`}>
        <button className="bg-orange-500 text-white px-6 py-3 rounded">
          Đặt phòng
        </button>
      </Link>
    </div>
  );
}
