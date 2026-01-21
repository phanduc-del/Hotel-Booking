import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RoomListPage() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const [sortPrice, setSortPrice] = useState("asc");
  const [typeFilter, setTypeFilter] = useState("all");

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/rooms");
        setRooms(res.data);
      } catch (err) {
        console.error("Lỗi lấy danh sách phòng", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  // LỌC THEO LOẠI
  let filteredRooms =
    typeFilter === "all"
      ? rooms
      : rooms.filter(r => r.type?.name === typeFilter);

  // SẮP XẾP THEO GIÁ
  filteredRooms.sort((a, b) =>
    sortPrice === "asc"
      ? a.type.price_daily - b.type.price_daily
      : b.type.price_daily - a.type.price_daily
  );

  if (loading) return <div className="p-6">Đang tải phòng...</div>;

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Danh sách phòng trống</h1>

      {/* BỘ LỌC */}
      <div className="flex gap-4">
        <select
          className="border p-2 rounded"
          onChange={e => setTypeFilter(e.target.value)}
        >
          <option value="all">Tất cả loại phòng</option>
          <option value="Phòng đôi">Phòng đôi</option>
          <option value="Phòng chủ đề">Phòng chủ đề</option>
          <option value="Phòng gia đình">Phòng gia đình</option>
        </select>

        <select
          className="border p-2 rounded"
          onChange={e => setSortPrice(e.target.value)}
        >
          <option value="asc">Giá tăng dần</option>
          <option value="desc">Giá giảm dần</option>
        </select>
      </div>

      {/* DANH SÁCH PHÒNG */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredRooms.map(room => (
          <Link
            key={room._id}
            to={`/rooms/${room._id}`}
            className="border rounded-xl overflow-hidden hover:shadow-lg"
          >
            <img
              src={room.type?.image_url}
              className="h-48 w-full object-cover"
            />

            <div className="p-4 space-y-2">
              <h2 className="font-bold text-lg">{room.name}</h2>
              <p className="text-sm text-gray-500">
                {Object.entries(room.type?.amenities || {})
                  .filter(([_, v]) => v)
                  .map(([k]) => k)
                  .join(", ")}
              </p>

              <p className="text-orange-500 font-bold">
                {room.type?.price_daily?.toLocaleString()}đ / đêm
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
