import mongoose from 'mongoose';

const typeRoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  amenities: {
    type: Object // hoặc [String] nếu muốn
  },
  price_hourly: {
    type: mongoose.Schema.Types.Decimal128,
    required: true
  },
  price_additional_hour: {
    type: mongoose.Schema.Types.Decimal128
  },
  price_daily: {
    type: mongoose.Schema.Types.Decimal128
  },
  price_overnight: {
    type: mongoose.Schema.Types.Decimal128
  },
  image_url: {
    type: String
  }
}, { timestamps: true });

export default mongoose.model('TypeRoom', typeRoomSchema);
