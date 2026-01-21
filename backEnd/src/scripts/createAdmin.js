import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const existed = await User.findOne({ email: "admin@gmail.com" });
    if (existed) {
      console.log("⚠️ Admin đã tồn tại");
      process.exit();
    }

    const admin = await User.create({
      name: "Admin",
      email: "admin@gmail.com",
      password: "123456",
      number_phone: "0999999999",
      role: "admin",
    });

    console.log(" Admin created:", admin.email);
    process.exit();
  } catch (err) {
    console.error(" Create admin error:", err);
    process.exit(1);
  }
};

createAdmin();
