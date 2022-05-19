import { combineReducers } from "redux";

import priceReducer from '../modules/rooms/price.reducer';
import userReducer from '../services/users/user.reducer';
import authReducer from '../services/auth/auth.reducer';
import guestReducer from "../services/guests/guest.reducer";
import roomReducer from "../services/rooms/room.reducer";

export default combineReducers({
    priceReducer,
    userReducer,
    authReducer,
    guestReducer,
    roomReducer
});