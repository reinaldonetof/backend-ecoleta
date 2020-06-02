import express from "express";

const app = express();

app.get("/users", (req, res) => {
  console.log("users");
});

app.listen(3333);
