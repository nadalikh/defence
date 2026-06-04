import {toast} from "react-toastify";


export function notif(msg: string, error: boolean) {
    if (error)
        toast.error(msg, {
            position: "top-center",
            autoClose: 5000,
            theme: "dark",
        })
    else
        toast.success(msg, {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",
        });
}
