import TypeRoom from "../models/TypeRoom.js";

/**
 * GET /api/type-rooms
 * Lấy tất cả loại phòng
 */
export const getAllTypeRooms = async (req, res) => {
  try {
    const typeRooms = await TypeRoom.find();
    res.status(200).json(typeRooms);
  } catch (error) {
    console.error("❌ getAllTypeRooms:", error);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

/**
 * GET /api/type-rooms/:id
 * Lấy chi tiết loại phòng
 */
export const getTypeRoomById = async (req, res) => {
  try {
    const typeRoom = await TypeRoom.findById(req.params.id);

    if (!typeRoom) {
      return res.status(404).json({ message: "Không tìm thấy loại phòng" });
    }

    res.status(200).json(typeRoom);
  } catch (error) {
    console.error("❌ getTypeRoomById:", error);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

/**
 * POST /api/type-rooms
 * Tạo loại phòng mới
 */
export const createTypeRoom = async (req, res) => {
  try {
    const {
      name,
      amenities,
      price_hourly,
      price_additional_hour,
      price_daily,
      price_overnight,
      image_url
    } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Tên loại phòng là bắt buộc" });
    }

    const newTypeRoom = await TypeRoom.create({
      name,
      amenities,
      price_hourly,
      price_additional_hour,
      price_daily,
      price_overnight,
      image_url
    });

    res.status(201).json(newTypeRoom);
  } catch (error) {
    console.error("❌ createTypeRoom:", error);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

/**
 * PUT /api/type-rooms/:id
 * Cập nhật loại phòng
 */
export const updateTypeRoom = async (req, res) => {
  try {
    const updatedTypeRoom = await TypeRoom.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedTypeRoom) {
      return res.status(404).json({ message: "Không tìm thấy loại phòng" });
    }

    res.status(200).json(updatedTypeRoom);
  } catch (error) {
    console.error("❌ updateTypeRoom:", error);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

/**
 * DELETE /api/type-rooms/:id
 * Xóa loại phòng
 */
export const deleteTypeRoom = async (req, res) => {
  try {
    const deletedTypeRoom = await TypeRoom.findByIdAndDelete(req.params.id);

    if (!deletedTypeRoom) {
      return res.status(404).json({ message: "Không tìm thấy loại phòng" });
    }

    res.status(200).json({
      message: "Xóa loại phòng thành công",
      data: deletedTypeRoom
    });
  } catch (error) {
    console.error("❌ deleteTypeRoom:", error);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
};
