import LeftForm from "./Components/Left-Enquiry-Form";
import RightList from "./Components/Right-Enquiry-List";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneno: "",
    message: "",
  });
  const [enquiries, setEnquiries] = useState([]);

  // Save form data
  const saveEnquiry = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/insert-enquiry", formData)
      .then((res) => {
        toast.success("Enquiry saved successfully");
        setFormData({ name: "", email: "", phoneno: "", message: "" });
        fetchEnquiries();
      })
      .catch((err) => {
        toast.error("Failed to submit enquiry");
        console.error(err);
      });
  };

  // Handle input changes
  const getValue = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fetch all enquiries
  const fetchEnquiries = () => {
    axios
      .get("http://localhost:8000/api/get-enquiries")
      .then((res) => setEnquiries(res.data.msg))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  return (
    <div className="p-4 min-h-screen bg-gray-100">
      <h1 className="text-3xl sm:text-4xl font-bold text-center py-6">
        User Enquiry
      </h1>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
        {/* Left form */}
        <div className="bg-white p-4 rounded shadow">
          <LeftForm
            formData={formData}
            getValue={getValue}
            saveEnquiry={saveEnquiry}
          />
        </div>

        {/* Right list */}
        <div className="bg-white p-4 rounded shadow overflow-x-auto">
          <RightList fetchEnquiries={fetchEnquiries} enquiries={enquiries} />
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;