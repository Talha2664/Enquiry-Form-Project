import { Button, Label, TextInput, Textarea } from "flowbite-react";

const LeftForm = ({formData,getValue,saveEnquiry}) => {
  return (
    <div className="bg-gray-200 p-4 ">
      <h2 className="text-[20px] font-bold mb-4">Enquiry Form</h2>

      {/*  Form start */}
      <form className="flex flex-col gap-4" onSubmit={saveEnquiry}>
        
        {/*  Name field */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name">Enter Name</Label>
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Enter Your Name"
            name="name"                 // backend me key banegi: name
            value={formData.name}       // user ki value yahan store hoti hai
            onChange={getValue}         // jab user likhe
            required
          />
        </div>

        {/*  Email field */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email">Enter email</Label>
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="name123@gmail.com"
            name="email"               // backend key: email
            value={formData.email}     // user ki value
            onChange={getValue}
            required
          />
        </div>

        {/*  Phone field */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="phone">Enter Phone No</Label>
          </div>
          <TextInput
            id="phone"
            type="text"
            name="phoneno"             // backend key: phoneno
            value={formData.phoneno}   // user ki value
            onChange={getValue}
            required
          />
        </div>

        {/*  Message field */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="message">Your message</Label>
          </div>
          <Textarea
            id="message"
            placeholder="Leave a message..."
            name="message"             // backend key: message
            value={formData.message}   // user ki value
            onChange={getValue}
            required
            rows={4}
          />
        </div>
        {/*  Submit button */}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default LeftForm