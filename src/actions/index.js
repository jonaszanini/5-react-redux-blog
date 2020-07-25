import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => (dispatch) => {
    const response = jsonPlaceholder.get(`/user/${id}`);

    dispatch({type: "FETCH_USER", payload: response.data})
};