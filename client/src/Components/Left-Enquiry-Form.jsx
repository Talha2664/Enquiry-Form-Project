import axios from "axios";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";

const LeftForm = () => {
  // State banayi form ka data store karne ke liye
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phoneno: "",
    message: "",
  });

  // Jab form submit ho
  const saveEnquiry = (e) => {
    e.preventDefault(); // page reload hone se rokta hai

    // Backend ko data bhejna
    axios
      .post("http://localhost:8000/api/insert-enquiry", formData)
      .then((res) => {
        console.log(res.data);

        // Submit ke baad form empty kar dena
        setformData({
          name: "",
          email: "",
          phoneno: "",
          message: "",
        });
      });
  };

  // Jab user input box me likhe
  const getValue = (e) => {
    let oldData = { ...formData };     // purana data copy kiya
    let inputName = e.target.name;    // input ka name (e.g. name, email)
    let inputValue = e.target.value;  // user ki likhi hui value

    // jis input ka name hai usi key me value daal do
    oldData[inputName] = inputValue;

    // state update kar di
    setformData(oldData);
  };

  return (
    <div className="bg-gray-200 p-4 rounded">
      <h2 className="text-[20px] font-bold mb-4">Enquiry Form</h2>

      {/* Form start */}
      <form className="flex max-w-md flex-col gap-4" onSubmit={saveEnquiry}>
        
        {/* Name field */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name">Enter Name</Label>
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Enter Your Name"
            name="name"                 // backend me key banegi: name
            value={formData.name}      // user ki value yahan store hoti hai
            onChange={getValue}        // jab user likhe
            required
          />
        </div>

        {/* Email field */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email">Enter email</Label>
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="name123@gmail.com"
            name="email"               // backend key: email
            value={formData.email}    // user ki value
            onChange={getValue}
            required
          />
        </div>

        {/* Phone field */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="phone">Enter Phone No</Label>
          </div>
          <TextInput
            id="phone"
            type="text"
            name="phoneno"             // backend key: phoneNo
            value={formData.phoneno}  // user ki value
            onChange={getValue}
            required
          />
        </div>

        {/* Message field */}
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="message">Your message</Label>
          </div>
          <Textarea
            id="message"
            placeholder="Leave a message..."
            name="message"             // backend key: message
            value={formData.message}  // user ki value
            onChange={getValue}
            required
            rows={4}
          />
        </div>

        {/* Submit button */}
        <Button type="submit">Submit</Button>

      {/* 🔹 ToastContainer shows all toast notifications */}
      <ToastContainer
        position="top-right"  // position of toast
        autoClose={3000}      // close after 3 sec
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
      </form>
    </div>
  );
};

export default LeftForm;