import DisplayableError from "../dataTypes/Errors/DisplayableError";
import {toast} from "react-toastify";
import {AxiosError} from "axios";

export function errorProcessor(error: Error) {
    console.log("Catched error", error)
    if (error instanceof DisplayableError) {
        toast.error(error.messageToDisplay)
    } else if (error instanceof AxiosError) {
        console.log(error.response?.data)
        console.log(error.status)
        let message = "Something went wrong, try again later"
        if (error.response?.data?.message) {
            message = error.response.data.message
        }
        toast.error(message)
        if (error.status === 401) {

        }
    }
}