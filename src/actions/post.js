export const FETCH_POST = 'FETCH_POST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';

export function fetchPosts() {
  return {
    type: [FETCH_POST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE],
    promise(client) {
      return client.get('/posts');
    },
  };
}
