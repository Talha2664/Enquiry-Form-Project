const express = require("express");
const {
  insertEnquiry,
  updateEnquiry,
  deleteEnquiry,
  getAllEnquiries,
} = require("../controllers/enquiryController");

const enquiryRoutes = express.Router();

/* CREATE */
enquiryRoutes.post("/insert-enquiry", insertEnquiry);

/* READ */
enquiryRoutes.get("/get-enquiries", getAllEnquiries);

/* UPDATE */
enquiryRoutes.put("/update-enquiry/:id", updateEnquiry);

/* DELETE */
enquiryRoutes.delete("/delete-enquiry/:id", deleteEnquiry);

module.exports = enquiryRoutes;
