import {connect} from 'react-redux';

import {getPostList} from '../selectors/posts';
import PostsComponent from '../components/posts';

const mapStateToProps = (state, ownProps) => {
    return {
        posts: getPostList(state),
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsComponent);