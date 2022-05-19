import axios from 'axios';
import { useState } from 'react';
import { clearCookie, getCookie } from "../../config";
import { useDispatch } from "react-redux";
import { toast } from '../../utils/snackbarUtils';
import {userList} from "./data"
let token = getCookie("jwt")
axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.common["Authorization"] = token;

export function useFindUser() {
    const dispatch = useDispatch();
    const findUser = () => {
        axios.get('/api/users/info')
            .then(res => {
                dispatch({ type: 'GET_USER', payload: { data: res.data } })
            }).catch(err => {
                clearCookie("jwt")
            });
    }
    return { findUser }
}

export function useGetAllUsers() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true)
    const getAllUsers = () => {
                dispatch({ type: 'GET_ALL_USERS', payload: { data: userList } })
                toast.success("Lấy danh sách user thành công")
                setIsLoading(false)
    }
    return { getAllUsers, isLoading }
}
export function useCreateUser() {
    const dispatch = useDispatch();
    const createUser = async (data) => {
        await axios
            .post("/api/users", data)
            .then(res => {
                dispatch({ type: 'ADD_USER', payload: { data: res.data } })
                toast.success("Tạo mới user thành công")
            })
            .catch((err) => {
                toast.error("Tạo mới user thất bại")
            });
    }
    return { createUser }
}
export function useEditUser() {
    const dispatch = useDispatch();
    const editUser = async (id, data) => {
        await axios
            .put(`/api/users/${id}`, data)
            .then(res => {
                dispatch({ type: 'EDIT_USER', payload: { data: res.data } })
                toast.success("Chỉnh sửa user thành công")
            })
            .catch((err) => {
                toast.error("Chỉnh sửa user thất bại")
            });
    }
    return { editUser }
}