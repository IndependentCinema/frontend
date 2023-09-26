export const AuthActionTypes = {
    REGISTER: "REGISTER",
    LOGIN: "LOGIN",
    SET_FIRST_TIME_USER: "SET_FIRST_TIME_USER",
    UPDATE_USER: "UPDATE_USER",
    LOGOUT: "LOGOUT",
    SET_ACCESS_TOKEN: "SET_ACCESS_TOKEN",
    SET_REMEMBER_ME: "SET_REMEMBER_ME",
}

export const setRememberMe = (payload) => {
    return {
        type: AuthActionTypes.SET_REMEMBER_ME,
        payload
    }
}

export const setAccessToken = (payload) => {
    return {
        type: AuthActionTypes.SET_ACCESS_TOKEN,
        payload
    }
}

export const updateUser = (payload) => {
    return {
        type: AuthActionTypes.UPDATE_USER,
        payload
    }
}

export const login = (payload) => {
    return {
        type: AuthActionTypes.LOGIN,
        payload
    }
}

export const logout = () => {
    return {
        type: AuthActionTypes.LOGOUT
    }
}

export const register = (payload) => {
    return {
        type: AuthActionTypes.REGISTER,
        payload
    }
}