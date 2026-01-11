export const testApi = (req, res) => {
  res.json({
    message: "Project working!",
    correlationId: req.correlationId,
  });
};

// Simulate an error
export const errorApi = (req, res) => {
  throw new Error("Something went wrong!");
};
