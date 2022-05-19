import axios from "axios";
import queryString from "query-string";

const RESERVATION_API_URL_1 = "http://localhost:8080/api/admin/reservations";

class ReservationService{
    static async  getListReservationByParam(filters){
        const paramsString = queryString.stringify(filters);
        return axios.get(RESERVATION_API_URL_1 +`/list?${paramsString}` ,filters);
    };
    static async  getReservationById(id){
        return axios.get(RESERVATION_API_URL_1 +`/${id}`);
    };
    
}
export default ReservationService;
