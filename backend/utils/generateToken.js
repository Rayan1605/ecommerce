import jwt from 'jsonwebtoken'; // creating and verifying JSON Web Tokens (JWTs).

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  // Set JWT as an HTTP-Only cookie
  res.cookie('jwt', token, {
    httpOnly: true,// This make it a Http only cookie which means it can only be accessed by the server and not by javascript
    secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
    //The reason is to set that in true you need to have a https connection but in production we don't have https connection
    sameSite: 'strict', // Prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days -> it in milliseconds
  });
};

export default generateToken;
