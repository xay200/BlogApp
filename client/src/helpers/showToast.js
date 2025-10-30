import { toast, Bounce } from "react-toastify"

export const showToast = (type, message) => {
    const config = {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true, 
        pauseOnHover: true,
        draggable: true,
        progress: undefined,    
        theme: "light",
        transition: Bounce,
    }

    if (type === 'success') {
        toast.success(message, config)
    } else if (type === 'error') {
        toast.error(message, config)
    } else if (type === 'info') {
        toast.info(message, config)
    } else {
        toast(message, config)
    }
}