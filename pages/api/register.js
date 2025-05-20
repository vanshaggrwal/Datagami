import connectMongo from '../../lib/mongodb';
import User from '../../models/User';
import bcrypt from 'bcryptjs';


  export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

  const { email, phone, password, ...rest } = req.body;

  if (!email || !password || !phone) {
    return res.status(400).json({ message: 'Email, phone, and password are required' });
  }

  try {
    await connectMongo();

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const existingPhone = await User.findOne({ phone });
    if (existingPhone) {
      return res.status(400).json({ message: 'Phone number already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      phone,
      password: hashedPassword,
      ...rest,
    });

    res.status(201).json({ message: 'User registered successfully', userId: newUser._id });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Error registering user' }); 
  }
}