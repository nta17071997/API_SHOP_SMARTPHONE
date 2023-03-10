const jwt = require('jsonwebtoken');

const generateAuthToken = (user) => {
  const secretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      avatar: user.avatar,
      createdAt: user.createdAt
    },
    secretKey 
  );
  return token;
};

module.exports = generateAuthToken;
