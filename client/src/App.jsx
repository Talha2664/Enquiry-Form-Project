import LeftForm from "./Components/Left-Enquiry-Form";
import RightList from "./Components/Right-Enquiry-List";

import axios from "axios";
import { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  HiOutlineUserGroup,
  HiOutlineMail,
  HiOutlineChatAlt2,
} from "react-icons/hi";

const App = () => {

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneno: "",
    message: "",
  });

  // Enquiries State
  const [enquiries, setEnquiries] = useState([]);

  // Loading State
  const [loading, setLoading] = useState(false);

  // Save Enquiry
  const saveEnquiry = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        "http://localhost:8000/api/insert-enquiry",
        formData
      );

      toast.success("Enquiry submitted successfully");

      // Reset Form
      setFormData({
        name: "",
        email: "",
        phoneno: "",
        message: "",
      });

      fetchEnquiries();

    } catch (error) {

      toast.error("Failed to submit enquiry");

      console.error(error);

    } finally {
      setLoading(false);
    }
  };

  // Input Change
  const getValue = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Fetch Enquiries
  const fetchEnquiries = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/get-enquiries"
      );

      setEnquiries(res.data.msg);

    } catch (error) {
      console.error(error);
      toast.error("Failed to load enquiries");
    }
  };

  // Initial Load
  useEffect(() => {
    fetchEnquiries();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-gray-200">

      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            {/* Title */}
            <div>
              <h1 className="text-4xl font-extrabold text-gray-800">
                Enquiry Dashboard
              </h1>

              <p className="text-gray-500 mt-2">
                Manage customer enquiries professionally.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-4 flex-wrap">

              {/* Total Enquiries */}
              <div className="bg-white shadow-lg rounded-2xl px-5 py-4 min-w-[170px] border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                    <HiOutlineUserGroup size={24} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Total Enquiries
                    </p>

                    <h3 className="text-2xl font-bold text-gray-800">
                      {enquiries.length}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Emails */}
              <div className="bg-white shadow-lg rounded-2xl px-5 py-4 min-w-[170px] border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-3 rounded-xl text-green-600">
                    <HiOutlineMail size={24} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Emails
                    </p>

                    <h3 className="text-2xl font-bold text-gray-800">
                      {enquiries.length}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="bg-white shadow-lg rounded-2xl px-5 py-4 min-w-[170px] border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
                    <HiOutlineChatAlt2 size={24} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Messages
                    </p>

                    <h3 className="text-2xl font-bold text-gray-800">
                      {enquiries.length}
                    </h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 md:p-6">

        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-6">

          {/* Left Form */}
          <div>
            <LeftForm
              formData={formData}
              getValue={getValue}
              saveEnquiry={saveEnquiry}
              loading={loading}
            />
          </div>

          {/* Right List */}
          <div>
            <RightList
              fetchEnquiries={fetchEnquiries}
              enquiries={enquiries}
            />
          </div>

        </div>
      </div>

      {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="colored"
        newestOnTop
      />
    </div>
  );
};

export default App;