import React, { useState } from "react";
import { AxiosWithAuth } from "../../middleware/axioswithauth";
import { TextField, Button } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress'
import { withRouter } from 'react-router-dom';
import "./register.scss";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const initialRegState = {
  first_name: "",
  last_name: "",
  city: "",
  state: "",
  profession: "",
  image: "",
  email: "",
  password: "",
};

const MentorRegister = (props) => {
  const [registerData, setRegisterData] = useState(initialRegState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const classes = useStyles();

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    setError('')
    AxiosWithAuth()
      .post("/auth/register/mentor", registerData)
      .then((res) => {
        setIsLoading(false)
        setRegisterData(initialRegState)
        props.history.push("/login");
      })
      .catch((err) => {
        setIsLoading(false)
        console.log(err);
        setError(err.message)
      });
  };

  if (isLoading) {
    return (
      <div>
        <CircularProgress color='primary' size='100px' />
      </div>
    )
  } else {

    return (
      <div className='login-register'>
        <h2 className='title'>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form className='formInput' onSubmit={handleSubmit}>
          <TextField
            type='text'
            name='first_name'
            value={registerData.first_name}
            onChange={handleChange}
            label='First Name'
            required
          />
          <TextField
            type='text'
            name='last_name'
            value={registerData.last_name}
            onChange={handleChange}
            label='Last Name'
            required
          />
          <TextField
            type='text'
            name='city'
            value={registerData.city}
            onChange={handleChange}
            label='City'
            required
          />
      <FormControl required className={classes.formControl}>
        <InputLabel id="demo-simple-select-required-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={registerData.state}
          onChange={handleChange}
          name='state'
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value='Alabama'>Alabama</MenuItem>         
          <MenuItem value='Alaska'>Alaska</MenuItem>
          <MenuItem value='Arizona'>Arizona</MenuItem>
          <MenuItem value='Arkansas'>Arkansas</MenuItem>
          <MenuItem value='California'>California</MenuItem>
          <MenuItem value='Colorado'>Colorado</MenuItem>
          <MenuItem value='Connecticut'>Connecticut</MenuItem>
          <MenuItem value='Delaware'>Delaware</MenuItem>         
          <MenuItem value='DC'>District of Columbia</MenuItem>
          <MenuItem value='Florida'>Florida</MenuItem>
          <MenuItem value='Georgia'>Georgia</MenuItem>
          <MenuItem value='Hawaii'>Hawaii</MenuItem>
          <MenuItem value='Idaho'>Idaho</MenuItem>
          <MenuItem value='Illinois'>Illinois</MenuItem>
          <MenuItem value='Indiana'>Indiana</MenuItem>         
          <MenuItem value='Iowa'>Iowa</MenuItem>
          <MenuItem value='Kansas'>Kansas</MenuItem>
          <MenuItem value='Kentucky'>Kentucky</MenuItem>
          <MenuItem value='Louisiana'>Louisiana</MenuItem>
          <MenuItem value='Maine'>Maine</MenuItem>
          <MenuItem value='Maryland'>Maryland</MenuItem>
          <MenuItem value='Massachusetts'>Massachusetts</MenuItem>         
          <MenuItem value='Michigan'>Michigan</MenuItem>
          <MenuItem value='Minnesota'>Minnesota</MenuItem>
          <MenuItem value='Mississippi'>Mississippi</MenuItem>
          <MenuItem value='Missouri'>Missouri</MenuItem>
          <MenuItem value='Montana'>Montana</MenuItem>
          <MenuItem value='Nebraska'>Nebraska</MenuItem>    
          <MenuItem value='Nevada'>Nevada</MenuItem>         
          <MenuItem value='New Hampshire'>New Hampshire</MenuItem>
          <MenuItem value='New Jersey'>New Jersey</MenuItem>
          <MenuItem value='New Mexico'>New Mexico</MenuItem>
          <MenuItem value='New York'>New York</MenuItem>
          <MenuItem value='North Carolina'>North Carolina</MenuItem>    
          <MenuItem value='North Dakota'>North Dakota</MenuItem>         
          <MenuItem value='Ohio'>Ohio</MenuItem>
          <MenuItem value='Oklahoma'>Oklahoma</MenuItem>
          <MenuItem value='Oregon'>Oregon</MenuItem>
          <MenuItem value='Pennsylvania'>Pennsylvania</MenuItem>          
          <MenuItem value='Rhode Island'>Rhode Island</MenuItem>    
          <MenuItem value='South Carolina'>South Carolina</MenuItem>         
          <MenuItem value='South Dakota'>South Dakota</MenuItem>
          <MenuItem value='Tennessee'>Tennessee</MenuItem>
          <MenuItem value='Texas'>Texas</MenuItem>
          <MenuItem value='Utah'>Utah</MenuItem>        
          <MenuItem value='Vermont'>Vermont</MenuItem>    
          <MenuItem value='Virginia'>Virginia</MenuItem>         
          <MenuItem value='Washington'>Washington</MenuItem>
          <MenuItem value='West Virginia'>West Virginia</MenuItem>
          <MenuItem value='Wisconsin'>Wisconsin</MenuItem>
          <MenuItem value='Wyoming'>Wyoming</MenuItem>
        </Select>
      </FormControl>
          <TextField
            type='text'
            name='profession'
            value={registerData.profession}
            onChange={handleChange}
            label='Profession'
            required
          />
          <TextField
            type='img'
            name='image'
            value={registerData.image}
            onChange={handleChange}
            label='Image'
            required
          />
          <TextField
            type='email'
            name='email'
            value={registerData.email}
            onChange={handleChange}
            label='Email'
            required
          />
          <TextField
            type='password'
            name='password'
            value={registerData.password}
            onChange={handleChange}
            label='Password'
            required
          />
          <Button type='submit'>SIGN UP</Button>
        </form>
      </div>
    );
  };
}
export default withRouter(MentorRegister);
