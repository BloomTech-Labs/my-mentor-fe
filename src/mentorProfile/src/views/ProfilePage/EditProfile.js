import React, { useState, useEffect } from 'react';
import { AxiosWithAuth } from '../../../../middleware/axioswithauth';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  roots: {
    '& > *': {
      margin: theme.spacing(1),
      width: '43ch',
    },
  },
}));
const initialState = {
    first_name: "",
    last_name: "",
    description: "",
    email: "",
    profession: ""
}
const EditProfile = (props) => {
    const [updatePost, setUpdatePost] = useState(initialState)
    const classes = useStyles();

    const handleChanges = e => {
        setUpdatePost({...updatePost, [e.target.name]: e.target.value})
    };

    const update = e => {
        e.preventDefault()
        AxiosWithAuth()
        .put(`https://mentor-be.herokuapp.com/api/mentor/${props.currentUser.id}`, updatePost)
        .then(res => {
            setUpdatePost(res.data)
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={update}>
                <TextField 
                    id="standard-basic" 
                    name='first_name'
                    label={props.currentUser.first_name}
                    onChange={handleChanges}
                    value={updatePost.first_name}
                />
                <TextField 
                    id="standard-basic" 
                    name='last_name'
                    label={props.currentUser.last_name}
                    onChange={handleChanges}
                    value={updatePost.last_name} 
                />
                <TextField 
                    id="standard-basic" 
                    name='profession'
                    label={props.currentUser.profession}
                    onChange={handleChanges} 
                    value={updatePost.profession}
                />
                <TextField 
                    id="standard-basic" 
                    name='email'
                    label={props.currentUser.email}
                    onChange={handleChanges} 
                    value={updatePost.email}
                />
                <TextField className={classes.roots}
                    id="standard-textarea"
                    label="Description"
                    placeholder="Description"
                    name='description'
                    Defaultvalue={props.currentUser.description}
                    multiline
                    onChange={handleChanges}
                    value={updatePost.description} 
                    />
            </form>
        </div>
    )
}

export default EditProfile;