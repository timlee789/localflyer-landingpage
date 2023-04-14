//import bcrypt from 'bcrypt';
import User from '../../../models/Users';
//import Guest from '../../../models/Guest';
import db from '../../../utils/db';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return;
  }
  const { name, email, tel, password, city, address, state, zip, storename } = req.body;
  if (!name || !email || !password || password.trim().length < 5) {
    res.status(422).json({
      message: 'Validation error',
    });
    return;
  }
  await db.connect();

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    res.status(422).json({ message: 'User exist already!' });
    await db.disconnect();
    return;
  }

  const newuser = new User({
    name,
    storename,
    email,
    tel,
    address,
    city,
     state,
     zip,
    password,
  });
  const user = await newuser.save();
  await db.disconnect();
  res.status(201).send({ 
     _id: user._id,
     name: user.name,
     email: user.email,
     tel: user.tel,
     storename: user.storename,
      address: user.address,
     city: user.city,
     state: user.state,
     zip: user.zip,
   // image: user.IsAdmin,
  });
}
export default handler;
