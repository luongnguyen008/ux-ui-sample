import axios from 'axios';
import { clearCookie, getCookie } from "../../config";
import { useDispatch } from "react-redux";
import { toast } from '../../utils/snackbarUtils';
import {guestList} from './data'
let token = getCookie("jwt")
axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.common["Authorization"] = token;

export function useGetAllGuests() {
    const dispatch = useDispatch();
    const getAllGuests = () => {
       dispatch({ type: 'GET_ALL_GUESTS', payload: { data: guestList } })
          
    }
    return { getAllGuests }
}
