import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    enum: ['admin', 'member', 'guest'],
    default: 'guest'
  },
  birth_date: {
    type: Date
  },
  number_phone: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String
  },
  point: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

export default mongoose.model('User', userSchema);
