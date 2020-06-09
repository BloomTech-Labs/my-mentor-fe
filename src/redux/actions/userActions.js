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

export const BEGIN_MENTEE_UPDATE_POST = 'BEGIN_MENTEE_UPDATE_POST';
export const UPDATE_MENTEE_POST_SUCCESS = 'UPDATE_MENTEE_POST_SUCCESS';
export const UPDATE_MENTEE_POST_FAILURE = 'UPDATE_MENTEE_POST_FAILURE';

export const updatePost = (id, post) => dispatch => {
  dispatch({ type: BEGIN_MENTEE_UPDATE_POST });

  axiosWithAuth()
  .put("API GOES HERE", {
    
  })
  .then(res => {
    dispatch({ type: UPDATE_MENTEE_POST_SUCCESS, payload: res.data, message: 'successfully updated joke'})
  })
  .catch(error => {
    console.error(error);

    dispatch({ type: UPDATE_MENTEE_POST_FAILURE , payload: error.response.data.message })
  });
}

export const BEGIN_MENTEE_PUT_PROFILE = 'BEGIN_ADD_MENTEE_POST';
export const MENTEE_PUT_PROFILE_SUCCESS = 'ADD_MENTEE_POST_SUCCESS';
export const MENTEE_PUT_PROFILE_FAILURE = 'ADD_MENTEE_POST_FAILURE';

export const addMenteePost = menteePutProfile => dispatch => {
  dispatch({ type: BEGIN_MENTEE_PUT_PROFILE });

  axiosWithAuth()
    .put('API GOES HERE', {
    
    })
    .then(res => {
      return dispatch({ type: MENTEE_PUT_PROFILE_SUCCESS, payload: res.data })
    })
    .catch(error => {
      console.error(error);
      dispatch({ type: MENTEE_PUT_PROFILE_FAILURE , payload: error.response.data.message })
    });
}
