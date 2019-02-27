import {connect} from 'react-redux';

import {getMenu} from '../selectors/header';
import {getUserEmail} from '../selectors/auth';
import {fetchMenu, fetchUserData} from '../actions/header';

import headerComponent from '../components/header';

const mapStateToProps = (state, ownProps) => {
    return {
        menu: getMenu(state),
        user: getUserEmail(state),
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchMenu: dispatch(fetchMenu()),
        fetchUserData: dispatch(fetchUserData()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(headerComponent);