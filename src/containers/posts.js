import {connect} from 'react-redux';

import {getPostList, getPostIsLoading, getFailedReason} from '../selectors/posts';
import {requestFetchPosts} from '../actions/posts';
import PostsComponent from '../components/posts';

const mapStateToProps = (state, ownProps) => {
    return {
        posts: getPostList(state),
        isLoading: getPostIsLoading(state),
        error: getFailedReason(state),
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchPosts: () => dispatch(requestFetchPosts())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsComponent);