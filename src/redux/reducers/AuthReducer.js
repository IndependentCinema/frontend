import { AuthActionTypes } from '../actions/AuthActions'

const INITIAL_STATE = {
    loggedIn: false,
    accessToken: null,
    rememberMe: null,
    user: null,
    cart: null
}

const AuthReducer = (state = INITIAL_STATE, action) => {
    // let user, accessToken, rememberMe

    switch (action.type) {

        case AuthActionTypes.REGISTER:
            return { ...state, user: action.payload }

        case AuthActionTypes.SET_FIRST_TIME_USER:
            return { ...state, firstTimeUser: false }

        case AuthActionTypes.SET_ACCESS_TOKEN:
            return { ...state, accessToken: action.payload }

        case AuthActionTypes.SET_REMEMBER_ME:
            return { ...state, rememberMe: action.payload }

        case AuthActionTypes.LOGIN:
            console.log("action.payload: ", action.payload)
            return {
                ...state,
                loggedIn: true,
                user: action.payload.user,
                accessToken: action.payload.token
            }

        case AuthActionTypes.UPDATE_USER:
            return {
                ...state,
                user: action.payload
            }

        case AuthActionTypes.LOGOUT:
            return {
                ...state,
                user: null,
                cart: null,
                loggedIn: false,
                accessToken: null,
                sessionToken: '',
            }

        default:
            return state
    }
}

export default AuthReducer