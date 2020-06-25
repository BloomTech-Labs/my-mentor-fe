import React, { useState, useEffect } from "react";
import { AxiosWithAuth } from '../../../../middleware/axioswithauth';
import TextField from '@material-ui/core/TextField';
import { Modal} from 'antd';

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import InfoIcon from "@material-ui/icons/Info";
// core components
import MentorHeader from "../../../../home-components/nav-drawer";
import Footer from "../../components/Footer/Footer.js";
import Button from "../../components/CustomButtons/Button.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import NavPills from "../../components/NavPills/NavPills.js";
import Parallax from "../../components/Parallax/Parallax";

import studio1 from "../../assets/img/examples/studio-1.jpg";
import reviewone from "../../assets/img/examples/review1.jpg";
import reviewtwo from "../../assets/img/examples/review2.jpg";
import aboutme from "../../assets/img/examples/about.jpg";

//assets/img/examples/studio-1.jpg
import fashionweek from "../../assets/img/examples/fashionweek.jpg";
import studentone from "../../assets/img/examples/student1.jpg";
import dale from "../../assets/img/examples/dale.jpg";

import styles from "../../assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

const initialState = {
    first_name: "",
    last_name: "",
    description: "",
    email: "",
    profession: ""
}
export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const [userLoggedIn, setUserLoggedIn] = useState([]);
  const userStorage = useState(localStorage.getItem('email'));
  const [state, setState] = useState({ visible: false });
  const showModal = () => {
      setState({ visible: true })
      localStorage.removeItem("email", userLoggedIn.email);

  }

  const handleClose = e => {
      setState({ visible: false })
  }

  useEffect(() => {
    AxiosWithAuth()
    .get('https://mentor-be.herokuapp.com/api/mentor',{headers: {Authorization: localStorage.getItem('token')}})
    .then(res => {
      const currentUser = res.data.filter(user => (
        user.email === userStorage[0])
      )[0];
      setUserLoggedIn(currentUser);
    })
    .catch(err => console.log(err.response))
  }, [state]);

  const handleChanges = e => {
    setUserLoggedIn({...userLoggedIn, [e.target.name]: e.target.value})
    localStorage.setItem("email", userLoggedIn.email);
};

const update = e => {
    e.preventDefault()
    AxiosWithAuth()
    .put(`https://mentor-be.herokuapp.com/api/mentor/${userLoggedIn.id}`, userLoggedIn)
    .then(res => {
        localStorage.setItem("email", userLoggedIn.email);
        setUserLoggedIn(res.data)
        window.location.reload()
    })
    .catch(err => console.log(err))
    handleClose()
}
  return (
    <div>
      <MentorHeader />
      <Parallax
        small
        filter
        image={userLoggedIn.image}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={userLoggedIn.image} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h2 className={classes.title}> {userLoggedIn.first_name} {userLoggedIn.last_name}</h2>
                    <h5>{userLoggedIn.profession}</h5>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                {userLoggedIn.description}{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "About",
                      tabIcon: InfoIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={aboutme}
                              className={navImageClasses}
                            />
                            <h2>Mural Life</h2>
                            <p>
                              While your design flair and styling experience may
                              position you to easily tackle the look and feel of
                              your resume, you may not feel as confident about
                              actually writing this pivotal document. If this is
                              the case, one of the first things you should do is
                              look at several designer resume samples.
                            </p>{" "}
                            <p>
                              While your design flair and styling experience may
                              position you to easily tackle the look and feel of
                              your resume, you may not feel as confident about
                              actually writing this pivotal document. If this is
                              the case, one of the first things you should do is
                              look at several designer resume samples.
                            </p>{" "}
                            <p>
                              While your design flair and styling experience may
                              position you to easily tackle the look and feel of
                              your resume, you may not feel as confident about
                              actually writing this pivotal document. If this is
                              the case, one of the first things you should do is
                              look at several designer resume samples.
                            </p>{" "}
                            <p>
                              While your design flair and styling experience may
                              position you to easily tackle the look and feel of
                              your resume, you may not feel as confident about
                              actually writing this pivotal document. If this is
                              the case, one of the first things you should do is
                              look at several designer resume samples.
                            </p>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Mentee's",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                            <h2>John River</h2>
                            <p>
                              While your design flair and styling experience may
                              position you to easily tackle the look and feel of
                              your resume, you may not feel as confident about
                              actually writing this pivotal document. If this is
                              the case, one of the first things you should do is
                              look at several designer resume samples.
                            </p>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studentone}
                              className={navImageClasses}
                            />
                            <h2>Lira King</h2>
                            <p>
                              While your design flair and styling experience may
                              position you to easily tackle the look and feel of
                              your resume, you may not feel as confident about
                              actually writing this pivotal document. If this is
                              the case, one of the first things you should do is
                              look at several designer resume samples.
                            </p>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={dale}
                              className={navImageClasses}
                            />
                            <h2>Justin Powers</h2>
                            <p>
                              While your design flair and styling experience may
                              position you to easily tackle the look and feel of
                              your resume, you may not feel as confident about
                              actually writing this pivotal document. If this is
                              the case, one of the first things you should do is
                              look at several designer resume samples.
                            </p>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={fashionweek}
                              className={navImageClasses}
                            />
                            <h2>Key Features</h2>
                            <p>
                              While your design flair and styling experience may
                              position you to easily tackle the look and feel of
                              your resume, you may not feel as confident about
                              actually writing this pivotal document. If this is
                              the case, one of the first things you should do is
                              look at several designer resume samples.
                            </p>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <h2>My Journey to Fashion Week</h2>
                            <p>
                              While your design flair and styling experience may
                              position you to easily tackle the look and feel of
                              your resume, you may not feel as confident about
                              actually writing this pivotal document. If this is
                              the case, one of the first things you should do is
                              look at several designer resume samples.
                            </p>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <h2>What I Learned</h2>
                            <p>
                              While your design flair and styling experience may
                              position you to easily tackle the look and feel of
                              your resume, you may not feel as confident about
                              actually writing this pivotal document. If this is
                              the case, one of the first things you should do is
                              look at several designer resume samples.
                            </p>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Reviews",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={reviewone}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={reviewtwo}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <img
                              alt="..."
                              src={reviewone}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={reviewtwo}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={reviewone}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
            <Button onClick={showModal}>Edit Profile</Button>
            <Modal
                title='Edit Profile'
                visible={state.visible}
                onCancel={handleClose}
                footer={[
                    <>
                        <Button key='back' type='primary' ghost onClick={update} >
                            Close
                        </Button>
                    </>
                ]}
            >
                     <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={update}>
                <TextField 
                    id="standard-basic" 
                    name='first_name'
                    label='First Name'
                    onChange={handleChanges}
                    value={userLoggedIn.first_name}
                    defaultValue={userLoggedIn.first_name}
                />
                <TextField 
                    id="standard-basic" 
                    name='last_name'
                    label='Last Name'
                    onChange={handleChanges}
                    value={userLoggedIn.last_name}
                    defaultValue={userLoggedIn.last_name} 
                />
                <TextField 
                    id="standard-basic" 
                    name='profession'
                    label='Profession'
                    onChange={handleChanges} 
                    value={userLoggedIn.profession}
                    defaultValue={userLoggedIn.profession}
                />
                <TextField 
                    id="standard-basic"
                    name='email'
                    label='Email'
                    onChange={handleChanges} 
                    value={userLoggedIn.email}
                    defaultValue={userLoggedIn.email}
                />
                <TextField className={classes.roots}
                    id="standard-textarea"
                    label="Description"
                    name='description'
                    defaultValue={userLoggedIn.description}
                    multiline
                    onChange={handleChanges}
                    value={userLoggedIn.description} 
                    />
            </form>
             </div>
            </Modal>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
