import { Search, Globe } from 'lucide-react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-black py-3 px-4 md:px-8 sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Logo & Partner */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-2xl font-bold text-orange-500 cursor-pointer hover:opacity-80"
          >
            Go2Joy
          </Link>

          <a href="#" className="hidden lg:block text-sm hover:text-orange-400 transition">
            Dành cho đối tác
          </a>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl hidden md:flex items-center bg-white rounded-full px-4 py-2 border border-gray-300">
          <input
            type="text"
            placeholder="Bạn muốn đi đâu?"
            className="bg-transparent border-none focus:outline-none w-full text-sm text-black placeholder-gray-400"
          />

          <div className="h-4 w-[1px] bg-gray-300 mx-3"></div>

          <span className="text-xs text-gray-600">Theo giờ • Bất kỳ</span>

          <button className="ml-3 bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition">
            <Search size={16} className="text-white" />
          </button>
        </div>


        {/* Auth */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 cursor-pointer hover:text-orange-400">
            <Globe size={18} />
            <span className="text-sm">Tiếng Việt</span>
          </div>

          <Link to="/login" className="text-orange-500 font-medium">
            Đăng nhập
          </Link>

          <Link
            to="/register"
            className="bg-white text-orange-500 border border-orange-500 px-4 py-1.5 rounded-md text-sm font-medium hover:bg-orange-500 hover:text-white"
          >
            Đăng ký
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
