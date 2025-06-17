import Swal from "sweetalert2";

const ErrorAlert=(msg)=>{
    Swal.fire(`${msg}`);
}

const SuccessAlert=(msg)=>{
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${msg}`,
                showConfirmButton: false,
                timer: 1500,
              });
}


export {ErrorAlert,SuccessAlert};