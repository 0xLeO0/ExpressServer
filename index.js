// Express Server Starter

const path = require("path");
const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

const app = express();

// Static folder
app.use(express.static(path.join(__dirname, "public")));

// Load config
dotenv.config({ path: "./config/config.env" });

// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes
app.use("/", require("./routes/index"));

// Port
const PORT = process.env.PORT || 3000;

// Server
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
