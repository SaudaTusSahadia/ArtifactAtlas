import { toast } from "react-toastify";

const ErrorToast = (msg) => {
  toast.error(`${msg}`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};


export { ErrorToast };