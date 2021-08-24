const express = require("express");
const { rootRouter } = require("./routers/root.router");
const path = require("path");
const app = express();
const cors = require("cors");
app.use(cors());
const pathPublicDirectory = path.join(__dirname, "./public");
app.use("/public", express.static(pathPublicDirectory));
app.use(express.json());

const port = 1010;

app.use("/api", rootRouter);
app.listen(port, () => {});
