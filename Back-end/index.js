import express from "express";
import db from "./config/database.js";
import todosRoute from "./routes/index.js";
import cors from "cors";

const app = express();

try {
  await db.authenticate();
  console.log("Database connected...");
} catch (error) {
  console.log("Database error:", error);
}

app.use(cors());
app.use(express.json());
app.use("/todolist", todosRoute);

app.listen(5000, () => console.log("server running at port 5000"));
