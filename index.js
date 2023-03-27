import express from "express";
import cors from "cors";
import connectToDb from "./src/dbConnections/remoteDbAtlas.js";
import nowfloatsRoute from "./src/Routes/BooksRoutes.js";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server starts Successfully");
});

connectToDb();
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(express.json());
app.use(cors());

app.use(nowfloatsRoute);
