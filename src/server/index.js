// server.js
const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get("/users", (req, res) => {
  let users = [
    {
      name: "Thimma",
      email: "thimma@gmail",
    },
    {
      name: "John",
      email: "john@gmail",
    },
    {
      name: "Jane",
      email: "jane@gmail",
    },
    {
      name: "Michael",
      email: "michael@gmail",
    },
  ];
  setTimeout(() => {
    res.send(users);
  }, [2000]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
