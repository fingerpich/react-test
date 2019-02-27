export const getPostList = state => state.posts.posts;
export const getPostIsLoading = state => state.posts.isFetching;
export const getFailedReason = state => state.posts.errorFetching;
