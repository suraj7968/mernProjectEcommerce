// Create Token And Saving In cookie

const sentToken = (user, statusCode, res) => {
  const token = user.getJWTToken();
  // Options For Cookie
  const options = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 1000),
    httpOnly: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sentToken;

// Create Token And Saving In cookie

// const sentToken = (user, statusCode, res) => {
//   const token = user.getJWTToken();
//   // Options For Cookie
//   const options = {
//     expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 1000),
//     httpOnly: true,
//   };
//   res.status(statusCode).cookie("token", token, options).json({
//     success: true,
//     user,
//     token,
//   });
// };

// module.exports = sentToken;
