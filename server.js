// DEPENDENCIES //
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

// SET PORT //
const PORT = process.env.PORT || 3001;

// INTIALIZE SERVER //
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
const routes = require("./routes/routes");

// ADD API ROUTES //
app.use(routes);

// MONGODB CONNECTION //
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/googlebooks', { useUnifiedTopology: true, useNewUrlParser: true });

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
