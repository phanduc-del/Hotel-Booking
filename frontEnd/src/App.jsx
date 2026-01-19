import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

import RoomListPage from "./pages/Room/RoomListPage";
import RoomDetailPage from "./pages/Room/RoomDetailPage";
import BookingPage from "./pages/Booking/BookingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/rooms" element={<RoomListPage />} />
          <Route path="/rooms/:id" element={<RoomDetailPage />} />
          <Route path="/booking/:id" element={<BookingPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
