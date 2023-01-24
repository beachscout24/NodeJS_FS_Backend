const errorTemplate = (res, err, message) => {
  console.log(err.message);
  return res.status(501).json({
    error: {
      message: message,
      status: err.status,
    },
  });
};

module.exports = errorTemplate;
