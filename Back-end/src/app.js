import express from "express";
import userRoute from "./Routes/User.js";
import connectDatabase from "./config/Database.js";
import cors from "cors";

const app = express();
const port = 4000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.use("/", userRoute);

app.use("/", (err, req, res, next) => {
  console.error("Error:", err);

  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({
    status,
    error: message,
  });
});

connectDatabase()
  .then(() => {
    console.log("Database connection was successfully.");
    app.listen(port, () => {
      console.log(`Server Started at port:${port}`);
    });
  })
  .catch(() => {
    console.log("database connection failed");
  });
