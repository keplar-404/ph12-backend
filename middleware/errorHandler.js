const errorHandler = (err, req, res, next) => {
  // console.error('Error:', err);

  if (err.statusCode) {
    res.status(err.statusCode).json({ error: err.message });
  } else {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default errorHandler;
