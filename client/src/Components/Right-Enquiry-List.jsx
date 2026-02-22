import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Button,
} from "flowbite-react";
import Swal from "sweetalert2";
const RightList = ({ fetchEnquiries, enquiries }) => {
  const deleteRow = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/delete-enquiry/${id}`);
      Swal.fire("Deleted!", "Enquiry has been deleted.", "success");
      fetchEnquiries(); // list refresh
    } catch (error) {
      Swal.fire("Error!", "Failed to delete enquiry.", "error");
    }
  };
  const confirmDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This enquiry will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRow(id); // actual delete function call
      }
    });
  };
  const editRow = async (item) => {
  const { value: formValues } = await Swal.fire({
    title: "Edit Enquiry",
    html: `
      <input id="swal-name" class="swal2-input" placeholder="Name" value="${item.name}">
      <input id="swal-email" class="swal2-input" placeholder="Email" value="${item.email}">
      <input id="swal-phone" class="swal2-input" placeholder="Phone" value="${item.phoneno}">
      <input id="swal-message" class="swal2-input" placeholder="Message" value="${item.message}">
    `,
    focusConfirm: false,
    showCancelButton: true,
    preConfirm: () => {
      return {
        name: document.getElementById("swal-name").value,
        email: document.getElementById("swal-email").value,
        phoneno: document.getElementById("swal-phone").value,
        message: document.getElementById("swal-message").value,
      };
    },
  });

  if (formValues) {
    try {
      await axios.put(
        `http://localhost:8000/api/update-enquiry/${item._id}`,
        formValues
      );
      Swal.fire("Updated!", "Enquiry updated successfully", "success");
      fetchEnquiries(); // refresh list
    } catch (error) {
      Swal.fire("Error!", "Update failed", "error");
    }
  }
};
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Sr.no</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Phone</TableHeadCell>
            <TableHeadCell>Message</TableHeadCell>
            <TableHeadCell>Edit</TableHeadCell>
            <TableHeadCell>Delete</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {enquiries.map((item, index) => (
            <TableRow key={item._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phoneno}</TableCell>
              <TableCell>{item.message}</TableCell>
              <TableCell>
                <Button
                  size="xs"
                  color="warning"
                  className="bg-blue-600 text-black cursor-pointer"
                  onClick={() => editRow(item)}
                >
                  Edit
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => deleteRow(item._id)}
                  size="xs"
                  color="failure"
                  className="bg-red-600 cursor-pointer"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RightList;
