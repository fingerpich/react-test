import {connect} from 'react-redux';

import {requestSignIn} from '../actions/auth';
import {getLoginError} from '../selectors/auth'
import loginComponent from '../components/login';

const mapStateToProps = (state, ownProps) => {
    return {
        error: getLoginError(state)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signIn: (user) => dispatch(requestSignIn(user.email, ownProps.from, ownProps.history)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(loginComponent);