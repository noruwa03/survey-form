import express, { Request, Response } from "express";
import { config } from "dotenv";
import routes from "./router/routes";
import path from "path"
config();
const { PORT } = process.env;

const app = express();

app.use(express.json());
const baseDirectory = path.resolve(__dirname, ".");
app.use(express.static(path.join(baseDirectory, "dist")));
app.use(express.json());
app.use("/api/v1", routes);

app.get("*", (_:Request, res:Response) => {
  res.sendFile(path.join(baseDirectory, "/dist/index.html"));
});

app.listen(PORT, () => {
  console.log("Server running.....");
});
