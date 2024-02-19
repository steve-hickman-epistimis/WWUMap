const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = 5000;
const url = process.env.DATABASE_URL;
app.use(cors());

// // Connect to MongoDB using Mongoose
// mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Check if the connection is successful
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

// Connecting to database
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Epistimis' // Specify your desired database name
})
  .then((ans) => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error in the Connection");
  });

// Defining the Schema
const lawSchema = new mongoose.Schema({
  jurisdiction: {
    type: String,
    required: true,
    unique: true,
  },
  filterCategories: {
    type: Array,
  },
  privacyLaws: {
    type: Array,
  },
  otherPrivacyLaws: {
    type: Array,
  },
});

// Creating a mongoose model
const Laws = mongoose.model("Laws", lawSchema);

app.get("/api/:stateName", (req, res) => {
  const stateName = req.params.stateName;
  console.log(stateName, " gets called!!");
  
  Laws.findOne({jurisdiction: stateName})
  .then((law) => {
    if (!law) {
      return res.json({
        status: "fail",
        message: "No law found for the specified state",
      });
    }

    res.json({
      status: "success",
      message: `API called for state: ${stateName}`,
      data: {
        law,
      },
    });
  })
  .catch((err) => {
    console.error("Error:", err);
    res.json({
      status: "fail",
      message: "Failed to retrieve law information",
    });
  });

});

app.listen(port, () => {
  console.log("Server is running on port ", port);
});