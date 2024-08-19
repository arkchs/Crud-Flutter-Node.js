import express from "express";
import {userModel} from "./models/user.js"
import cors from 'cors';
import { handleGETName,handlePOSTName } from "./controllers/user.js";
const app = express();
const PORT = 8000;
app.use(express.json());
app.use(cors());
app.get("/",handleGETName);
app.post("/",handlePOSTName);


app.listen(PORT, () => {
  return console.log("Server has connected at port: " + PORT);
});
