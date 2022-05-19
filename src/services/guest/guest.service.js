import axios from "axios";
import queryString from "query-string";

const GUEST_API_URL = "http://localhost:8080/api/admin/guests";

class GuestService{
    static async  getListGuest(filtersGuest){
        const paramsString = queryString.stringify(filtersGuest);
        return axios.get(GUEST_API_URL + `/searching?${paramsString}`, filtersGuest);
    };
    
}
export default GuestService;
