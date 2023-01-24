const successTemplate = (res, result, message, status, bools, token) => {
  return res.status(status).json({
    message: message,
    result: result,
    logged: bools,
    token: token,
  });
};

module.exports = successTemplate;
