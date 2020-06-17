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


export const BEGIN_GET_MENTOR_POST = 'BEGIN_GET_MENTOR_POST';
export const GET_MENTOR_POST_SUCCESS = 'GET_MENTOR_POST_SUCCESS';
export const GET_MENTOR_POST_FAILURE = 'GET_MENTOR_POST_FAILURE';

export const getMentorPost = () => dispatch => {
  dispatch({ type: BEGIN_GET_MENTOR_POST });
  axios
    .get('https://mentor-be.herokuapp.com/api/mentor/posts/all')
    .then(res => {
      return dispatch({ type: GET_MENTOR_POST_SUCCESS , payload: res.data })
    })
    .catch(error => {
      console.error(error);
      dispatch({ type: GET_MENTOR_POST_FAILURE , payload: error.response.data.message })
    });
}

export const BEGIN_ADD_MENTOR_POST = 'BEGIN_ADD_MENTOR_POST';
export const ADD_MENTOR_POST_SUCCESS = 'ADD_MENTOR_POST_SUCCESS';
export const ADD_MENTOR_POST_FAILURE = 'ADD_MENTOR_POST_FAILURE';

export const addMentorPost = mentorPost => dispatch => {
  dispatch({ type: BEGIN_ADD_MENTOR_POST });

  axiosWithAuth()
    .post('https://mentor-be.herokuapp.com/api/mentor/:mentorId/posts', {
      'post': mentorPost.post
    })
    .then(res => {
      return dispatch({ type: ADD_MENTOR_POST_SUCCESS, payload: res.data })
    })
    .catch(error => {
      console.error(error);
      dispatch({ type: ADD_MENTOR_POST_FAILURE , payload: error.response.data.message })
    });
}

export const BEGIN_MENTOR_UPDATE_POST = 'BEGIN_MENTOR_UPDATE_POST';
export const UPDATE_MENTOR_POST_SUCCESS = 'UPDATE_MENTOR_POST_SUCCESS';
export const UPDATE_MENTOR_POST_FAILURE = 'UPDATE_MENTOR_POST_FAILURE';

export const updatePost = (id, post) => dispatch => {
  dispatch({ type: BEGIN_MENTOR_UPDATE_POST });

  axiosWithAuth()
  .put("https://mentor-be.herokuapp.com/api/mentor/:mentorId/posts/:pid	", {
    
  })
  .then(res => {
    dispatch({ type: UPDATE_MENTOR_POST_SUCCESS, payload: res.data, message: 'successfully updated'})
  })
  .catch(error => {
    console.error(error);
  
    dispatch({ type: UPDATE_MENTOR_POST_FAILURE , payload: error.response.data.message })
  });
}

export const BEGIN_DELETE_MENTOR_POST = 'BEGIN_DELETE_MENTOR_POST';
export const DELETE_MENTOR_POST_SUCCESS = 'DELETE_MENTOR_POST_SUCCESS';
export const DELETE_MENTOR_POST_FAILURE = 'DELETE_MENTOR_POST_FAILURE';

export const deletePost = (id) => dispatch => {
  dispatch({ type: BEGIN_DELETE_MENTOR_POST })

  axiosWithAuth()
  .delete("https://mentor-be.herokuapp.com/api/mentor/:mentorId/posts/:pid")
  .then(res => {
    dispatch({ type: DELETE_MENTOR_POST_SUCCESS, payload: id })
  })
  .catch(error => {
    console.error(error);
   
    dispatch({ type: DELETE_MENTOR_POST_FAILURE , payload: error.response.data.message })
  });
}


// export const BEGIN_MENTOR_PUT_PROFILE = 'BEGIN_ADD_MENTOR_POST';
// export const MENTOR_PUT_PROFILE_SUCCESS = 'ADD_MENTOR_POST_SUCCESS';
// export const MENTOR_PUT_PROFILE_FAILURE = 'ADD_MENTOR_POST_FAILURE';

// export const addMentorPost = MentorPutProfile => dispatch => {
//   dispatch({ type: BEGIN_MENTOR_PUT_PROFILE });

//   axiosWithAuth()
//     .put('API GOES HERE', {
    
//     })
//     .then(res => {
//       return dispatch({ type: MENTOR_PUT_PROFILE_SUCCESS, payload: res.data })
//     })
//     .catch(error => {
//       console.error(error);
//       dispatch({ type: MENTOR_PUT_PROFILE_FAILURE , payload: error.response.data.message })
//     });
// }
