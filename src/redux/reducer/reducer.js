import {
    BEGIN_GET_MENTOR_POST,
    GET_MENTOR_POST_SUCCESS,
    GET_MENTOR_POST_FAILURE,
    BEGIN_ADD_MENTOR_POST,
    ADD_MENTOR_POST_SUCCESS,
    ADD_MENTOR_POST_FAILURE,
    BEGIN_MENTOR_PROFILE_UPDATE,
    UPDATE_MENTOR_PROFILE_UPDATE_SUCCESS,
    UPDATE_MENTOR_PROFILE_UPDATE_FAILURE,
    BEGIN_DELETE_MENTOR_POST,
    DELETE_MENTOR_POST_SUCCESS,
    DELETE_MENTOR_POST_FAILURE
} from "../actions";

const initialState = {

  user: {
    id: 0,
    first_name: "",
    last_name: "",
    city: "",
    description: "",
    profression: "",
    image: "",
    state: "",
    email: ""
  },

  isAuthenticating: false,
  loggedIn: false,
  authenticationError: "",

  posts: [],

  isFetching: false,
  postsError: "",
  postsSuccess: "",
  postInfoError: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case START_MENTOR_LOGIN:
      return {
        ...state,
        isAuthenticating: true,
      };
    case LOGIN_MENTOR_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        loggedIn: true,
        email: email.email,
      };
    case LOGIN_MENTOR_FAILURE:
      return {
        ...state,
        authenticationError: action.payload,
        isAuthenticating: false,
      };
    case BEGIN_GET_MENTOR_POST:
        return {
            ...state,
            isFetchingPost: true
        }
    case GET_MENTOR_POST_SUCCESS:
        return {
            ...state,
            isFetchingPost: false,
            posts: [...action.payload]
        }
    case GET_MENTOR_POST_FAILURE:
        return {
            ...state,
            isFetchingPost: false,
            postsError: action.payload
        }
    case BEGIN_ADD_MENTOR_POST:
      return {
        ...state,
        isFetchingPost: true,
      };
    case ADD_MENTOR_POST_SUCCESS:
      return {
        ...state,
        isFetchingPost: false,
        postsSuccess: "Post was added.",
        posts: [...state.posts, action.payload],
      };
    case ADD_MENTOR_POST_FAILURE:
      return {
        ...state,
        isFetchingPost: false,
        postsError: action.payload,
      };
    case BEGIN_MENTOR_PROFILE_UPDATE:
      return {
        ...state,
        isFetchingPost: true,
      };
    case UPDATE_MENTOR_PROFILE_UPDATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.payload
      };
    case UPDATE_MENTOR_PROFILE_UPDATE_FAILURE:
        return {
            ...state,
            isFetchingPost: false
        }
    case BEGIN_DELETE_MENTOR_POST:
        return {
            ...state,
            isFetchingPost: true
        }
    case DELETE_MENTOR_POST_SUCCESS:
        return {
            ...state,
            isFetchingPost: false,
            posts: state.posts.filter(post => post.id !== action.payload)
        }
    case DELETE_MENTOR_POST_FAILURE:
        return {
            ...state,
            isFetchingPost: false,
            postInfoError: action.payload
        }

    default:
      return {
        ...state,
      };
  }
};
