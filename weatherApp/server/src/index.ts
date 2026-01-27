import express from "express";
import dotenv from "dotenv";
import weatherRouter from "./routes/weather";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/weather", weatherRouter);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

const PORT = Number(process.env.PORT) || 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
