import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable in .env.local');
}

let cached = global.mongoose || { conn: null, promise: null };

async function connectMongo() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false, // Optional
    }).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  global.mongoose = cached;
  return cached.conn;
}

export default connectMongo;
