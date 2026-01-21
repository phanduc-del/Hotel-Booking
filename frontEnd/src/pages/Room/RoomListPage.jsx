import { useState } from "react";
import { Link } from "react-router-dom";

const rooms = [
  { id: 1, name: "Phòng đôi lãng mạn", type: "double", price: 200 },
  { id: 2, name: "Phòng chủ đề tình yêu", type: "theme", price: 300 },
];

export default function RoomListPage() {
  const [type, setType] = useState("all");

  const filteredRooms =
    type === "all" ? rooms : rooms.filter(r => r.type === type);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Danh sách phòng</h1>

      <select
        onChange={e => setType(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="all">Tất cả</option>
        <option value="double">Phòng đôi</option>
        <option value="theme">Phòng chủ đề</option>
      </select>

      {filteredRooms.map(room => (
        <Link
          key={room.id}
          to={`/rooms/${room.id}`}
          className="block p-3 border rounded hover:bg-gray-50"
        >
          {room.name} – {room.price}.000đ
        </Link>
      ))}
    </div>
  );
}
