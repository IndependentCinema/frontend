import { bindActionCreators } from 'redux';
import { PostMan } from '../../Helpers';
import { login, logout, setRememberMe } from '../../redux/actions/AuthActions';

export async function AttemptUpdateBooking({ payload, bookingId }) {
    console.log("payload:, ", payload)
    // Process request
    const responseObject = await PostMan(
        `/booking/${bookingId}`, 
        'put',
        payload 
    )
    // Handle response
    if (responseObject.status === 'success') {
        let responseData = responseObject.data
        console.log("responseData: ", responseData)
        window.location.reload()
    } else {
        // Set New State
        console.log("Error: ", Error)
        console.log("responseObject: ", responseObject)
        return null
    }
}

export async function AttemptBookTicket(payload) {
    console.log("payload:, ", payload)
    // Process request
    const responseObject = await PostMan(
        `/booking`, 
        'post',
        payload 
    )
    // Handle response
    if (responseObject.status === 'success') {
        let responseData = responseObject.data
        console.log("responseData: ", responseData)
        window.location.reload()
    } else {
        // Set New State
        console.log("Error: ", Error)
        console.log("responseObject: ", responseObject)
        return null
    }
}


export async function AttemptLogin({ payload, reduxLogin }) {
    console.log("payload:, ", payload)
    // Process request
    const responseObject = await PostMan(
        `/login`, 
        'post',
        payload
    )
    // Handle response
    if (responseObject.status === 'success') {
        let authData = responseObject.data
        console.log("authData: ", authData)
        reduxLogin(authData)
        return authData.user
    } else {
        // Set New State
        console.log("Error: ", Error)
        console.log("responseObject: ", responseObject)
        return null
    }
}


export const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            login,
            logout,
            setRememberMe
        },
        dispatch
    )
}


export const mapStateToProps = (state) => {
    const { auth } = state
    return {
        auth,
    }
}