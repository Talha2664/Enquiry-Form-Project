// Express framework import
const express = require("express");

// Database connection function import
const dbConnection = require("./config/db");

// Enquiry ke routes import (insert, get, etc.)
const enquiryRoutes = require("./routes/enquiryRoute");

// CORS import (frontend ko backend se connect karne ke liye)
const cors = require("cors");

// Express app banayi
const app = express();

//.env file se environment variables load karta hai
require("dotenv").config();

// CORS enable ki (different ports se request allow karne ke liye)
app.use(cors());

// JSON data read karne ke liye middleware
app.use(express.json());

// Sab /api wali requests enquiryRoutes file ko bhej do
// Example: /api/insert-enquiry
app.use("/api", enquiryRoutes);

// Port set kiya (ya .env se, ya default 5000)
const PORT = process.env.PORT || 5000;

// Pehle database connect karo
dbConnection()
  .then(() => {
    // Agar DB connect ho jaye to server start karo
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT} port successfully`);
    });
  })
  .catch((error) => {
    // Agar DB connect na ho to error show karo
    console.log("Server failed due to DB connection");
    console.error(error);
  });