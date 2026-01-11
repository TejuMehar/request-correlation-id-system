import { randomUUID } from "crypto";

export const correlationMiddleware = (req, res, next) => {
  const id = randomUUID(); // Create unique ID
  req.correlationId = id; // Attach to request
  res.setHeader("x-correlation-id", id); // Send in response
  console.log(`[Request] ${req.method} ${req.url} - ID: ${id}`);
  next();
};
