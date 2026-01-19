import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Đăng nhập thành công");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center text-orange-500">
          Đăng nhập
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Email" type="email" placeholder="example@gmail.com" />
          <Input label="Mật khẩu" type="password" placeholder="••••••••" />

          <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
            Đăng nhập
          </button>
        </form>

        <p className="text-sm text-center text-gray-500">
          Chưa có tài khoản?{" "}
          <Link to="/register" className="text-orange-500 hover:underline">
            Đăng ký
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
