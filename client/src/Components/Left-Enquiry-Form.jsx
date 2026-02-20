import { Button, Label, TextInput, Textarea } from "flowbite-react";

const LeftForm = () => {
  const saveEnquiry = (e)=> {
    e.preventDefault();
  }
  return (
    <div className="bg-gray-200 p-4 rounded">
      <h2 className="text-[20px] font-bold mb-4">Enquiry Form</h2>

      <form className="flex max-w-md flex-col gap-4" onSubmit={saveEnquiry}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name">Enter Name</Label>
          </div>
          <TextInput
            id="name"
            type="name"
            placeholder="Enter Your Name"
            name="name"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email">Enter email</Label>
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="name123@gmail.com"
            name="email"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="phone">Enter Phone no</Label>
          </div>
          <TextInput id="phone" type="phone" name="phoneno" required />
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="comment">Your message</Label>
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a comment..."
            name="comment"
            required
            rows={4}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default LeftForm;
