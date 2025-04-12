import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  const { email, password } = req.body;

 
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: 'User not found' });

 
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  res.status(200).json({ token, user });
};
