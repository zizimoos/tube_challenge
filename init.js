import "./db";
import "./models/Video";
import "./models/Comment";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT;
const handleListening = () =>
  console.log(`✅  Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
