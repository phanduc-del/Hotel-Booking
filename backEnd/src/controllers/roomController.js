import Room from "../models/Room.js";
import TypeRoom from "../models/TypeRoom.js";

/**
 * GET /api/rooms
 * Lấy tất cả phòng (kèm thông tin loại phòng)
 */
export const getAllRooms = async (req, res) => {
  try {
    console.log("👉 GET /api/rooms called");

    const rooms = await Room.find().populate("type");

    console.log("ROOMS:", rooms);

    res.status(200).json(rooms);
  } catch (error) {
    console.error("❌ getAllRooms error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * GET /api/rooms/:id
 * Lấy chi tiết 1 phòng theo ID
 */
export const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id)
      .populate("type");

    if (!room) {
      return res.status(404).json({ message: "Không tìm thấy phòng này" });
    }

    res.status(200).json(room);
  } catch (error) {
    console.error("❌ Lỗi getRoomById:", error);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

/**
 * POST /api/rooms
 * Tạo phòng mới
 * body: { name, type }
 */
export const createRoom = async (req, res) => {
  try {
    const { name, type } = req.body;

    // kiểm tra type có tồn tại không
    const existingType = await TypeRoom.findById(type);
    if (!existingType) {
      return res.status(404).json({
        message: "Loại phòng không tồn tại"
      });
    }

    const newRoom = await Room.create({
      name,
      type
    });

    res.status(201).json(newRoom);
  } catch (error) {
    console.error("❌ Lỗi createRoom:", error);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

/**
 * PUT /api/rooms/:id
 * Cập nhật phòng
 */
export const updateRoom = async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate("type");

    if (!updatedRoom) {
      return res.status(404).json({ message: "Không tìm thấy phòng" });
    }

    res.status(200).json(updatedRoom);
  } catch (error) {
    console.error("❌ Lỗi updateRoom:", error);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

/**
 * DELETE /api/rooms/:id
 * Xóa phòng
 */
export const deleteRoom = async (req, res) => {
  try {
    const deletedRoom = await Room.findByIdAndDelete(req.params.id);

    if (!deletedRoom) {
      return res.status(404).json({ message: "Không tìm thấy phòng để xóa" });
    }

    res.status(200).json({
      message: "Xóa phòng thành công",
      data: deletedRoom
    });
  } catch (error) {
    console.error("❌ Lỗi deleteRoom:", error);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
};
