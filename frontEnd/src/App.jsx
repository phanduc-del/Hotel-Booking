import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import RoomListPage from "./pages/Room/RoomListPage";
import RoomDetailPage from "./pages/Room/RoomDetailPage";




// import ProtectedRoute from "./components/ProtectedRoute";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🌐 User */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/rooms" element={<RoomListPage />} />
          <Route path="/rooms/:id" element={<RoomDetailPage />} />

          
            <Route path="/profile" element={<ProfilePage />} />
          
        </Route>

        {/* 🔐 ADMIN
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="rooms" element={<ManageRooms />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="bookings" element={<ManageBookings />} />
          </Route>
        </Route> */}

      </Routes>
    </BrowserRouter>
  );
}
