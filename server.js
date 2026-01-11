import express from "express";
import { correlationMiddleware } from "./middleware/correlation.js";
import { errorHandler } from "./middleware/error.js";
import testRoutes from "./routes/test.routes.js";

const app = express();

app.use(express.json());
app.use(correlationMiddleware); // main feature
app.use("/api", testRoutes);
app.use(errorHandler); // handle errors

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
