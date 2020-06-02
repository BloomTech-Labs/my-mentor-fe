import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token')
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  })
}


export const BEGIN_GET_MENTEE_POST = 'BEGIN_GET_MENTEE_POST';
export const GET_MENTEE_POST_SUCCESS = 'GET_MENTEE_POST_SUCCESS';
export const GET_MENTEE_POST_FAILURE = 'GET_MENTEE_POST_FAILURE';

export const getMenteePost = () => dispatch => {
  dispatch({ type: BBEGIN_GET_MENTEE_POST });
  axios
    .get('API GOES HERE')
    .then(res => {
      return dispatch({ type: GET_MENTEE_POST_SUCCESS , payload: res.data })
    })
    .catch(error => {
      console.error(error);
      dispatch({ type: GET_MENTEE_POST_FAILURE , payload: error.response.data.message })
    });
}

export const BEGIN_ADD_MENTEE_POST = 'BEGIN_ADD_MENTEE_POST';
export const ADD_MENTEE_POST_SUCCESS = 'ADD_MENTEE_POST_SUCCESS';
export const ADD_MENTEE_POST_FAILURE = 'ADD_MENTEE_POST_FAILURE';

export const addMenteePost = menteePost => dispatch => {
  dispatch({ type: BEGIN_ADD_MENTEE_POST });

  axiosWithAuth()
    .post('API GOES HERE', {
    
    })
    .then(res => {
      return dispatch({ type: ADD_MENTEE_POST_SUCCESS, payload: res.data })
    })
    .catch(error => {
      console.error(error);
      dispatch({ type: ADD_MENTEE_POST_FAILURE , payload: error.response.data.message })
    });
}
