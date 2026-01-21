import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import roomRoutes from "./routes/roomRoutes.js";
import typeRoomRoutes from "./routes/typeRoomRoutes.js";
import auth from "./routes/auth.js";
import userRoutes from "./routes/userRoutes.js";


dotenv.config();

console.log("ENV CHECK:", process.env.MONGO_URI);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Routes
app.use("/api/rooms", roomRoutes);
app.use("/api/type-rooms", typeRoomRoutes);

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", auth);


// Test API
app.get("/", (req, res) => {
  res.send("API running");
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
