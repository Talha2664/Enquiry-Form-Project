require("dotenv").config();

const express = require("express");
const dbConnection = require("./config/db");
const enquiryRoutes = require("./routes/enquiryRoute");

const app = express();

app.use(express.json());
app.use("/api", enquiryRoutes);

const PORT = process.env.PORT || 5000;

dbConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT} port successfully`);
    });
  })
  .catch((error) => {
    console.log("Server failed due to DB connection");
    console.error(error);
  });
