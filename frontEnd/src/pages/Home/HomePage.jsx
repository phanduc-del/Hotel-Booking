// import React from 'react'
// import QuizApp from '../../components/ui/Quiz.jsx'
// import Header from '/components/ui/header.jsx'
// import Footer from '/components/ui/footer.jsx'
// const HomePage = () => {
//   return (
//     <div className="min-h-screen w-full relative w-screen">
//         {/* Aurora Silk Fade Gradient */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           background: `linear-gradient(150deg, #B39DDB 0%, #D1C4E9 20%, #F3E5F5 40%, #FCE4EC 60%, #FFCDD2 80%, #FFAB91 100%)`,
//         }}
//       /> 
//       <div className="relative z-10 ">
//         <Header/>

//         <main className="max-w-2xl -6 mx-auto space-y-6">
//           <QuizApp/>
//         </main>

//         <Footer/>
//       </div>
        
//     </div>    
//   )
// }

// export default HomePage
import { useEffect, useState } from "react";
import axios from "axios";
import HotelCard from "../../components/ui/HotelCard";

export default function HomePage() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/rooms");
        setRooms(res.data);
      } catch (err) {
        console.error("Lỗi lấy phòng", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading) return <div className="p-6">Đang tải phòng...</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Khách sạn nổi bật</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rooms.map(room => (
          <HotelCard key={room._id} hotel={room} />
        ))}
      </div>
    </div>
  );
}

