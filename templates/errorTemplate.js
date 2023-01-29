const errorTemplate = (res, err, message) => {
  console.error(message);
  return res.status(501).json({
    error: {
      message: message,
      status: err.status,
    },
  });
};

module.exports = errorTemplate;
