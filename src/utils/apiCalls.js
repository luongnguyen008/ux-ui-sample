
import axios from 'axios';
import { getCookie } from '../config'
import { toast } from './snackbarUtils';
import { useState } from 'react';
import { useDispatch } from "react-redux";
let token = getCookie("jwt")
axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.common["Authorization"] = token;

//mẫu get service
// export function use...() {
//     const [state, dispatch] = useAppState()
//     const [isLoading, setIsLoading] = useState(true)
//     const get... = async (params) => {

//         axios.get("/api/", { params })
//             .then(res => {
//                 dispatch({ type: 'GET....', payload: res.data })
//                 toast.success("Gọi api thành công")
//             })
//             .catch((err) => {
//                 toast.error("Gọi api thất bại")
//             }).finally(() => {
//                 setIsLoading(false)
//             })
//     }

//     return {
//         isLoading,
//         get...
//     }
// }


export function useGetAllPrice() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)
    const getAllPrice = async (params) => {

        axios.get("/api/admin/price/list", { params })
            .then(res => {
                dispatch({ type: 'GET_ALL_PRICE', payload: res.data })
                toast.success("Gọi api thành công")
            })
            .catch((err) => {
                toast.error("Gọi api thất bại")
            }).finally(() => {
                setIsLoading(false)
            })
    }

    return {
        isLoading,
        getAllPrice
    }
}

//mẫu post service
export function useCreatePrice() {
    const dispatch = useDispatch();
    const createPrice = async (data) => {
        axios
            .post("/api/admin/price", data)
            .then(res => {
                dispatch({ type: 'ADD_PRICE', payload: { name: "gia vip vcl", price: 69696 } })
                toast.success("Gọi api thành công")
            })
            .catch((err) => {
                toast.error("Gọi api thất bại")
            });
    }
    return { createPrice }
}