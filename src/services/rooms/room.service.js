import axios from 'axios';
import { clearCookie, getCookie } from "../../config";
import { useDispatch } from "react-redux";
import { toast } from '../../utils/snackbarUtils';
import {roomList} from "./data"

let token = getCookie("jwt")
axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.common["Authorization"] = token;
const roomCheckIn = {
    status: 2,
    checkinTime: "2021-12-31T11:03",
    deposit: 500000,
    guests: [
        {
        id: 1,
        firstName: "le",
        lastName: "cao",
        birthday: 1638206091445,
        nationality: "Việt Nam",
        address: "Hà Nội",
        phoneNumber: "0989888999",
        email: "letiencao@gmail.com",
        idCard: "111111111111"
        },
        {
        id: 2,
        firstName: "nguyen",
        lastName: "nguyen",
        birthday: 1638206091445,
        nationality: "Việt Nam",
        address: "Hà Nội",
        phoneNumber: "0989888998",
        email: "nguyenluongnguyen@gmail.com",
        idCard: "111111111111"
        }
    ],
    servicesUsed: [
        {
        serviceId: 4,
        serviceName: "Nước lọc",
        price: 10000,
        quantity: 2,
        paid: true
        }
    ],
    serviceTotal: 20000
}
const roomCheckOut = {
    status: 3,
      checkInTime: 0,
      checkOutTime: 0,
      deposit: null,
      servicesUsed: null,
      guests: null,
      prices: null
}
export function useGetAllRooms() {
    const dispatch = useDispatch();
    const getAllRooms = () => {
        dispatch({ type: 'GET_ALL_ROOMS', payload: { data: roomList } })
        toast.success("Lấy danh sách phòng thành công")
                
    }
    return { getAllRooms }
}
export function useCheckIn() {
    const dispatch = useDispatch();
    const checkIn = (room) => {
        dispatch({ type: 'CHECK_IN', payload: { data: {...roomCheckIn, id: room.id, roomName: room.roomName, typeRoomName: room.typeRoomName, floor: room.floor} } })
        toast.success("Nhận phòng thành công")
                
    }
    return { checkIn }
}
export function useCheckOut() {
    const dispatch = useDispatch();
    const checkOut = (room) => {
        dispatch({ type: 'CHECK_OUT', payload: { data: {...roomCheckOut, id: room.id, roomName: room.roomName, typeRoomName: room.typeRoomName, floor: room.floor} } })
        toast.success("Trả phòng thành công")
                
    }
    return { checkOut }
}
export function useCleanRoom() {
    const dispatch = useDispatch();
    const cleanRoom = (room) => {
        dispatch({ type: 'CLEAN_ROOM', payload: { data: {...room, status: 1} } })
        toast.success("Dọn thành công")   
    }
    return { cleanRoom }
}
export function useFixRoom() {
    const dispatch = useDispatch();
    const fixRoom = (room) => {
        dispatch({ type: 'FIX_ROOM', payload: { data: {...room, status: 1} } })
        toast.success("Đã sửa chữa thành công")   
    }
    return { fixRoom }
}
