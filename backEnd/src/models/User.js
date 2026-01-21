import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },

    role: {
      type: String,
      enum: ["admin", "member", "guest"],
      default: "member",
    },

    number_phone: {
      type: String,
      default: "",
    },

    birth_date: Date,

    point: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// ✅ HASH PASSWORD – ĐÚNG CHUẨN
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
});

export default mongoose.model("User", userSchema);
