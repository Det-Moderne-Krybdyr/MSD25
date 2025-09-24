import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

const PORT: number = parseInt(process.env.PORT || "3000", 10);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Backend running on http://0.0.0.0:${PORT}`);
});
