import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;
const handleListening = () => console.log(`✅  Listening ...on : http://localhost:${PORT}`);
app.listen(PORT, handleListening);

const connect = (req, res) => res.send(`Hello World this is home page`);
const handleProfile = (req, res) => res.send(`yeah!~ this is profile page`);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", connect);
app.get("/profile", handleProfile);
