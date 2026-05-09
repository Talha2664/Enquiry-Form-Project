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
import {
  HiOutlinePencilAlt,
  HiOutlineTrash,
} from "react-icons/hi";

const RightList = ({ fetchEnquiries, enquiries }) => {

  // Delete Enquiry
  const deleteRow = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8000/api/delete-enquiry/${id}`
      );

      Swal.fire({
        icon: "success",
        title: "Deleted Successfully",
        text: "Enquiry has been removed.",
        timer: 1800,
        showConfirmButton: false,
      });

      fetchEnquiries();

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Delete Failed",
        text: "Something went wrong.",
      });
    }
  };

  // Confirm Delete
  const confirmDelete = (id) => {
    Swal.fire({
      title: "Delete Enquiry?",
      text: "You won’t be able to recover this data.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRow(id);
      }
    });
  };

  // Edit Enquiry
  const editRow = async (item) => {
    const { value: formValues } = await Swal.fire({
      title: "Edit Enquiry",
      html: `
        <input 
          id="swal-name" 
          class="swal2-input" 
          placeholder="Name" 
          value="${item.name}"
        >

        <input 
          id="swal-email" 
          class="swal2-input" 
          placeholder="Email" 
          value="${item.email}"
        >

        <input 
          id="swal-phone" 
          class="swal2-input" 
          placeholder="Phone" 
          value="${item.phoneno}"
        >

        <textarea 
          id="swal-message" 
          class="swal2-textarea" 
          placeholder="Message"
        >${item.message}</textarea>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Update",
      confirmButtonColor: "#2563eb",

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

        Swal.fire({
          icon: "success",
          title: "Updated Successfully",
          text: "Enquiry updated successfully.",
          timer: 1800,
          showConfirmButton: false,
        });

        fetchEnquiries();

      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "Something went wrong.",
        });
      }
    }
  };

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-6 border border-gray-100 overflow-x-auto">

      {/* Heading */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Enquiry List
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Manage all customer enquiries professionally.
          </p>
        </div>

        <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl font-semibold text-sm">
          Total: {enquiries.length}
        </div>
      </div>

      {/* Table */}
      <Table hoverable>
        <TableHead className="text-sm uppercase">
          <TableRow>
            <TableHeadCell>Sr No</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Phone</TableHeadCell>
            <TableHeadCell>Message</TableHeadCell>
            <TableHeadCell>Actions</TableHeadCell>
          </TableRow>
        </TableHead>

        <TableBody className="divide-y">
          {enquiries.length > 0 ? (
            enquiries.map((item, index) => (
              <TableRow
                key={item._id}
                className="bg-white hover:bg-gray-50 transition duration-200"
              >
                <TableCell className="font-medium text-gray-700">
                  {index + 1}
                </TableCell>

                <TableCell className="font-semibold text-gray-800">
                  {item.name}
                </TableCell>

                <TableCell>{item.email}</TableCell>

                <TableCell>{item.phoneno}</TableCell>

                <TableCell className="max-w-xs truncate">
                  {item.message}
                </TableCell>

                {/* Actions */}
                <TableCell>
                  <div className="flex gap-2">

                    {/* Edit Button */}
                    <Button
                      size="xs"
                      color="light"
                      className="border border-blue-200 hover:bg-blue-50"
                      onClick={() => editRow(item)}
                    >
                      <div className="flex items-center gap-1">
                        <HiOutlinePencilAlt size={16} />
                        Edit
                      </div>
                    </Button>

                    {/* Delete Button */}
                    <Button
                      size="xs"
                      color="failure"
                      className="hover:scale-105 transition-all"
                      onClick={() => confirmDelete(item._id)}
                    >
                      <div className="flex items-center gap-1">
                        <HiOutlineTrash size={16} />
                        Delete
                      </div>
                    </Button>

                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={6}
                className="text-center py-10 text-gray-500"
              >
                No enquiries found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default RightList;