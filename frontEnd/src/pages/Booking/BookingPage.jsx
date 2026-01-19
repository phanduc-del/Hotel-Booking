import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const BookingPage = () => {
  const { id } = useParams();
  const isLoggedIn = true; // giả lập

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  const [type, setType] = useState("hour");

  const handlePayment = () => {
    alert("Thanh toán thành công!");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold">Đặt phòng #{id}</h1>

      {/* Chọn kiểu đặt */}
      <select
        value={type}
        onChange={e => setType(e.target.value)}
        className="w-full border p-2 rounded my-4"
      >
        <option value="hour">Theo giờ</option>
        <option value="day">Theo ngày</option>
        <option value="night">Qua đêm</option>
      </select>

      <button
        onClick={handlePayment}
        className="w-full bg-orange-500 text-white py-2 rounded"
      >
        Thanh toán
      </button>
    </div>
  );
};

export default BookingPage;
