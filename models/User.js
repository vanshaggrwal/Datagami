// models/User.js
import mongoose from 'mongoose';
import { unique } from 'next/dist/build/utils';

const userSchema = new mongoose.Schema({
  fullName: String,
  address: String,
  city: String,
  state: String,
  pincode: String,
  phone:{type: String,unique: true} ,
  email: { type: String, unique: true },
  password: String,
  companyName: String,
  panCard: String,
  gstNumber: String,
  bankName: String,
  bankAccount: String,
  ifscCode: String,
  taxStatus: String,
  course: String,
});

export default mongoose.models.User || mongoose.model('User', userSchema);
