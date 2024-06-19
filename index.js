const express = require("express"); // Express is a routing library
const mongoose = require("mongoose"); // Mongoose library is used to connect and manipulate mongodb
const cors = require("cors");
const users = require("./api/users");
const students = require("./api/students");
const teachers = require("./api/teachers");
const subjects = require("./api/subjects");

require("dotenv").config();

const { MONGO_URL, PORT, DEVELOPMENT_URL } = process.env;
const app = express();

mongoose
  .connect(MONGO_URL, {
    connectTimeoutMS: 100,
    socketTimeoutMS: 100,
  })
  .then(() => {
    console.log("2. MongoDB connected");
  })
  .catch((err) => console.error("OOps there is some fault"));

app.listen(PORT, () => {
  console.log(`3. Server is listening on port ${PORT}`);
});

app.use(
  cors({
    origin: ["http://localhost:4000"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: false,
  })
);

app.use(express.json());

app.use("/api/users", users);
app.use("/api/students", students);
app.use("/api/teachers", teachers);
app.use("/api/subjects", subjects);
