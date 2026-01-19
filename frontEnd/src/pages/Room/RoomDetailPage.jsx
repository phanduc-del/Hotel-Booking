import { Link, useParams } from "react-router-dom";

const rooms = [
  { id: 1, name: "Phòng đôi lãng mạn", price: 200, tiệnÍch: "Wifi, TV, Điều hòa" },
  { id: 2, name: "Phòng chủ đề tình yêu", price: 300, tiệnÍch: "Jacuzzi, Nến" },
];

const RoomDetailPage = () => {
  const { id } = useParams();
  const room = rooms.find(r => r.id === Number(id));

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">{room.name}</h1>
      <p>Giá: {room.price}.000đ</p>
      <p>Tiện ích: {room.tiệnÍch}</p>

      <Link to={`/booking/${room.id}`}>
        <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
          Đặt phòng
        </button>
      </Link>
    </div>
  );
};

export default RoomDetailPage;
