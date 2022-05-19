let initState = {
    guestList: [],
    isLoading: false,
}

const guestReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_ALL_GUESTS':
            return {
                ...state,
                guestList: action.payload.data,
                isLoading: false
            }
        default:
            return state
    }
}

export default guestReducer