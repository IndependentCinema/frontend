import { bindActionCreators } from 'redux';
import { PostMan } from '../../Helpers';
import { login, logout } from '../../redux/actions/AuthActions';


export const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            login,
            logout,
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