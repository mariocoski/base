import express from "express";
const app = express();

export const DEFAULT_PORT_NUMBER: number = 3000;

app.use("*", (_, res) => {
  res.send({
    message: "OK",
  });
});

app.listen(DEFAULT_PORT_NUMBER, () => {
  console.log(`Server is listening on a port: ${DEFAULT_PORT_NUMBER}`);
});
