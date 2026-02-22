```md
#  Connecting Frontend with Backend using API
```
```md
# Frontend Side (React)

On the frontend, we install **Axios** to send requests to the backend.

#  Install Axios:

npm install axios


#  Purpose of Axios:

* Used to send **GET, POST, PUT, DELETE** requests
* Helps in sending form data to backend
* Receives response from server easily
```

```md
#  Backend Side (Express / Node)

The frontend and backend usually run on **different ports**:

* Frontend: `http://localhost:5173`
* Backend: `http://localhost:5000`

Because of different ports, the browser blocks requests by default due to CORS policy.

So, we install and use the CORS package in backend.


# CORS (Cross-Origin Resource Sharing)

#  Install CORS in backend:

npm install cors

# Use CORS in backend:

const cors = require("cors");
app.use(cors());

# Purpose of CORS:

* Allows frontend (different port) to access backend
* Removes browser restriction for cross-origin requests
* Makes API communication possible
```

```md
# What is Toastify

Ek library hai: react-toastify

Ye small popup messages (toast notifications) screen ke corner me dikhata hai

# Install karna

npm install react-toastify

# Import this in file

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

# Jab bhi user ko feedback dikhana ho → toast use karo

  .then(() => toast.success("Enquiry submitted successfully!"))
  .catch(() => toast.error("Failed to submit enquiry"));
```

