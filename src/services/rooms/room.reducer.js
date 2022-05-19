let initState = {
    roomList: [],
    isLoading: false,
}

const roomReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_ALL_ROOMS':
            return {
                ...state,
                roomList: action.payload.data,
                isLoading: false
            }
        case 'CHECK_IN':
            const updatedRoom = action.payload.data;
            console.log(updatedRoom)
            const updatedRooms = state.roomList.map((room) => {
                if (room.id === updatedRoom.id) {
                    return updatedRoom;
                }
                return room;
            });
            console.log("updatedRoooms", updatedRooms)
            return {
                ...state,
                roomList: updatedRooms,
                isLoading: false
            };
        case 'CHECK_OUT':
            const checkOutRoom = action.payload.data;
            console.log(checkOutRoom)
            const listRooms = state.roomList.map((room) => {
                if (room.id === checkOutRoom.id) {
                    return checkOutRoom;
                }
                return room;
            });
            console.log("updatedRoooms", listRooms)
            return {
                ...state,
                roomList: listRooms,
                isLoading: false
            };
        case 'CLEAN_ROOM':
            const cleanRoom = action.payload.data;
            console.log(cleanRoom)
            const listRooms1 = state.roomList.map((room) => {
                if (room.id === cleanRoom.id) {
                    return cleanRoom;
                }
                return room;
            });
            console.log("updatedRoooms", listRooms1)
            return {
                ...state,
                roomList: listRooms1,
                isLoading: false
                };
        case 'FIX_ROOM':
            const fixRoom = action.payload.data;
            console.log(fixRoom)
            const listRooms2 = state.roomList.map((room) => {
                if (room.id === fixRoom.id) {
                    return fixRoom;
                }
                return room;
            });
            console.log("updatedRoooms", listRooms2)
            return {
                ...state,
                roomList: listRooms2,
                isLoading: false
            };
        default:
            return state
    }
}

export default roomReducer