const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/Users");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.get("/", (req, res) => {
  userModel
    .find({})
    .then((users) => res.json(users))
    .catch((err) => res.log(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findById({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => res.log(err));
});

app.post("/createUser", async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;

  userModel
    .findByIdAndUpdate(
      { _id: id },
      { name: req.body.name, email: req.body.email, age: req.body.age }
    )
    .then((user) => res.json(user))
    .catch((err) => res.log(err));
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;

  userModel
    .findByIdAndDelete({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => res.log(err));
});

app.listen(3001, () => {
  console.log("Server is Running");
});
