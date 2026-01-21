import { Search, Globe, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!token) {
      setUser(null);
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5001/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(res.data);
      } catch (err) {
        setUser(null);
      }
    };

    fetchProfile();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null); // ⭐ QUAN TRỌNG
    navigate("/login");
  };

  return (
    <header className="text-black py-3 px-4 md:px-8 sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-500">
          Go2Joy
        </Link>

        {/* Right */}
        <div className="flex items-center gap-4">

          <div className="flex items-center gap-1">
            <Globe size={18} />
            <span className="text-sm">Tiếng Việt</span>
          </div>

          {user ? (
            <>
              {/* 👤 USER NAME */}
              <Link
                to="/profile"
                className="flex items-center gap-1 text-gray-700 hover:text-orange-500"
              >
                <User size={18} />
                <span className="text-sm font-medium">
                  {user.name || "User"}
                </span>
              </Link>

              <button
                onClick={handleLogout}
                className="text-sm text-red-500 hover:underline"
              >
                Đăng xuất
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-orange-500 font-medium">
                Đăng nhập
              </Link>
              <Link
                to="/register"
                className="border border-orange-500 px-4 py-1.5 rounded-md text-sm font-medium text-orange-500 hover:bg-orange-500 hover:text-white"
              >
                Đăng ký
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
