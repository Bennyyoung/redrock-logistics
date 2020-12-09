require("dotenv").config();

const mongoose = require(`mongoose`);
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
// process.env.ATLAS_URI;
mongoose
  .connect(`${process.env.MONGO_DB_URI}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch(console.log);

const apiRouter = require("./api/api.router.js");
app.use("/api", apiRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
