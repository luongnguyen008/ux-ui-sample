let initState = {
    user: {},
    userList: [],
    isLoading: false,
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_USER':
            return {
                ...state,
                user: action.payload.data,
                isLoading: false
            }
        case 'GET_ALL_USERS':
            return {
                ...state,
                userList: action.payload.data,
                isLoading: false
            }
        case 'ADD_USER':
            return {
                ...state,
                userList: [...state?.userList, action.payload.data],
                isLoading: false
            }
        case 'EDIT_USER':
            const updatedUser = action.payload.data;
            const updatedUsers = state.userList.map((user) => {
                if (user.id === updatedUser.id) {
                    return updatedUser;
                }
                return user;
            });
            return {
                ...state,
                userList: updatedUsers,
            };
        default:
            return state
    }
}

export default userReducer