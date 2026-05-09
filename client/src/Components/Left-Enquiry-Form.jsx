import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineUser } from "react-icons/hi";

const LeftForm = ({ formData, getValue, saveEnquiry }) => {
  return (
    <div className="w-full max-w-lg mx-auto bg-white shadow-2xl rounded-3xl p-8 border border-gray-100">
      
      {/* Heading */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Contact Us
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Fill out the form below and we’ll get back to you soon.
        </p>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-5" onSubmit={saveEnquiry}>
        
        {/* Name */}
        <div>
          <Label
            htmlFor="name"
            value="Full Name"
            className="mb-2 block text-gray-700 font-medium"
          />

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <HiOutlineUser size={20} />
            </div>

            <TextInput
              id="name"
              type="text"
              placeholder="Enter your full name"
              name="name"
              value={formData.name}
              onChange={getValue}
              required
              className="pl-10"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <Label
            htmlFor="email"
            value="Email Address"
            className="mb-2 block text-gray-700 font-medium"
          />

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <HiOutlineMail size={20} />
            </div>

            <TextInput
              id="email"
              type="email"
              placeholder="example@gmail.com"
              name="email"
              value={formData.email}
              onChange={getValue}
              required
              className="pl-10"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <Label
            htmlFor="phone"
            value="Phone Number"
            className="mb-2 block text-gray-700 font-medium"
          />

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              <HiOutlinePhone size={20} />
            </div>

            <TextInput
              id="phone"
              type="text"
              placeholder="+92 300 1234567"
              name="phoneno"
              value={formData.phoneno}
              onChange={getValue}
              required
              className="pl-10"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <Label
            htmlFor="message"
            value="Message"
            className="mb-2 block text-gray-700 font-medium"
          />

          <Textarea
            id="message"
            placeholder="Write your message here..."
            name="message"
            value={formData.message}
            onChange={getValue}
            required
            rows={5}
            className="resize-none"
          />
        </div>

        {/* Button */}
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-xl text-white font-semibold py-3"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default LeftForm;