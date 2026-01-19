import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/ui/Input";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Đăng ký thành công");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center text-orange-500">
          Đăng ký
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Họ và tên" placeholder="Nguyễn Văn A" />
          <Input label="Email" type="email" placeholder="example@gmail.com" />
          <Input label="Mật khẩu" type="password" />
          <Input label="Nhập lại mật khẩu" type="password" />

          <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
            Tạo tài khoản
          </button>
        </form>

        <p className="text-sm text-center text-gray-500">
          Đã có tài khoản?{" "}
          <Link to="/login" className="text-orange-500 hover:underline">
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
