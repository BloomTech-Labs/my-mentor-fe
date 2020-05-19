import axios from "axios";
import axioswithauth from "../../middleware/axioswithauth";

export const START_MENTOR_LOGIN = "START_MENTOR_LOGIN";
export const LOGIN_MENTOR_SUCCESS = "LOGIN_MENTOR_SUCCESS";
export const LOGIN_MENTOR_FAILURE = "LOGIN_MENTOR_FAILURE";

export const loginMentorUser = credentials => dispatch => {
    dispatch({ type: START_MENTOR_LOGIN })

    axios
        .post("https://mentor-be.herokuapp.com/api/login/mentor", credentials)
        .then(res => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("id", res.data.id)
            return dispatch({ type: LOGIN_MENTOR_SUCCESS, payload: res})
        })
        .catch( error => {
            console.log(error);
            dispatch({ LOGIN_MENTOR_FAILURE, payload: error.response.data.message})
        })
}