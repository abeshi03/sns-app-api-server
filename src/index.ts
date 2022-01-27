import express from "express";

const app = express();
const port = 3000;

app.use("/", require("./interfaces/router.js"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

