const Input = ({ label, type = "text", ...props }) => {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        {...props}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
      />
    </div>
  );
};

export default Input;
