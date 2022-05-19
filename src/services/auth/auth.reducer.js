let initState = {
    roles: [],
    isLoading: false,
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_ALL_ROLES':
            return {
                ...state,
                roles: action.payload.data,
                isLoading: false
            }
        default:
            return state
    }
}

export default authReducer