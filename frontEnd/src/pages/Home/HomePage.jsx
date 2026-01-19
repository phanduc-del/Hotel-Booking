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
import { hotels } from "../../lib/hotels";
import HotelCard from "../../components/ui/HotelCard";

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero search */}
      <section className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl font-bold">
            Đặt phòng khách sạn nhanh chóng
          </h1>
          <p className="opacity-90">
            Giá tốt mỗi giờ – mỗi đêm, xác nhận ngay
          </p>
        </div>
      </section>

      {/* Hotel list */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">
          Khách sạn nổi bật
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {hotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
