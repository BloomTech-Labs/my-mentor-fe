import {
    BEGIN_GET_MENTEE_POST,
    GET_MENTEE_POST_SUCCESS,
    GET_MENTEE_POST_FAILURE,
    BEGIN_ADD_MENTEE_POST,
    ADD_MENTEE_POST_SUCCESS,
    ADD_MENTEE_POST_FAILURE,
    BEGIN_MENTEE_UPDATE_POST,
    UPDATE_MENTEE_POST_SUCCESS,
    UPDATE_MENTEE_POST_FAILURE,
    BEGIN_DELETE_MENTEE_POST,
    DELETE_MENTEE_POST_SUCCESS,
    DELETE_MENTEE_POST_FAILURE
} from "../actions";

const initialState = {
  email: "",
  isAuthenticating: false,
  loggedIn: false,
  authenticationError: "",

  posts: [],

  isFetchingPost: false,
  postsError: "",
  postsSuccess: "",
  postInfoError: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case START_MENTEE_LOGIN:
      return {
        ...state,
        isAuthenticating: true,
      };
    case LOGIN_MENTEE_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        loggedIn: true,
        email: email.email,
      };
    case LOGIN_MENTEE_FAILURE:
      return {
        ...state,
        authenticationError: action.payload,
        isAuthenticating: false,
      };
    case BEGIN_GET_MENTEE_POST:
        return {
            ...state,
            isFetchingPost: true
        }
    case GET_MENTEE_POST_SUCCESS:
        return {
            ...state,
            isFetchingPost: false,
            posts: [...action.payload]
        }
    case GET_MENTEE_POST_FAILURE:
        return {
            ...state,
            isFetchingPost: false,
            postsError: action.payload
        }
    case BEGIN_ADD_MENTEE_POST:
      return {
        ...state,
        isFetchingPost: true,
      };
    case ADD_MENTEE_POST_SUCCESS:
      return {
        ...state,
        isFetchingPost: false,
        postsSuccess: "Post was added.",
        posts: [...state.posts, action.payload],
      };
    case ADD_MENTEE_POST_FAILURE:
      return {
        ...state,
        isFetchingPost: false,
        postsError: action.payload,
      };
    case BEGIN_MENTEE_UPDATE_POST:
      return {
        ...state,
        isFetchingPost: true,
      };
    case UPDATE_MENTEE_POST_SUCCESS:
      return {
        ...state,
        isFetchingPost: false,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.id) {
            return action.payload;
          } else {
            return post;
          }
        }),
      };
    case UPDATE_MENTEE_POST_FAILURE:
        return {
            ...state,
            isFetchingPost: false
        }
    case BEGIN_DELETE_MENTEE_POST:
        return {
            ...state,
            isFetchingPost: true
        }
    case DELETE_MENTEE_POST_SUCCESS:
        return {
            ...state,
            isFetchingPost: false,
            posts: state.posts.filter(post => post.id !== action.payload)
        }
    case DELETE_MENTEE_POST_FAILURE:
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
