export const errorHandler = (err, req, res, next) => {
  console.log(`[Error] ${err.message} - ID: ${req.correlationId}`);
  res.status(500).json({
    message: err.message,
    correlationId: req.correlationId
  });
};
