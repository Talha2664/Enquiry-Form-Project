const { enquiryModel } = require("../models/EnquiryModel");



const insertEnquiry = async (req, res) => {
  try {
    const { name, email, phoneno, message } = req.body;

    const enquiry = new enquiryModel({
      name,
      email,
      phoneno,
      message,
    });

    const savedEnquiry = await enquiry.save();

    res.status(201).json({
      status: 1,
      msg: savedEnquiry,
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      msg: "Insert failed",
      error,
    });
  }
};


const updateEnquiry = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedEnquiry = await enquiryModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedEnquiry) {
      return res.status(404).json({
        status: 0,
        msg: "Enquiry not found",
      });
    }

    res.json({
      status: 1,
      msg: updatedEnquiry,
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      msg: "Update failed",
      error,
    });
  }
};


const deleteEnquiry = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEnquiry = await enquiryModel.findByIdAndDelete(id);

    if (!deletedEnquiry) {
      return res.status(404).json({
        status: 0,
        msg: "Enquiry not found",
      });
    }

    res.json({
      status: 1,
      msg: "Enquiry deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      msg: "Delete failed",
      error,
    });
  }
};


const getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await enquiryModel.find();

    res.json({
      status: 1,
      msg: enquiries,
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      msg: "Fetch failed",
      error,
    });
  }
};



module.exports = {insertEnquiry,updateEnquiry,deleteEnquiry,getAllEnquiries}