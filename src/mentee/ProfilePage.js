import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import InfoIcon from "@material-ui/icons/Info";
// core components
import Header from "../home-components/nav-drawer";
import Footer from "../mentorProfile/src/components/Footer/Footer";
import Button from "../mentorProfile/src/components/CustomButtons/Button";
import GridContainer from "../mentorProfile/src/components/Grid/GridContainer";
import GridItem from "../mentorProfile/src/components/Grid/GridItem";
import HeaderLinks from "../mentorProfile/src/components/Header/HeaderLinks";
import NavPills from "../mentorProfile/src/components/NavPills/NavPills";
import Parallax from "../mentorProfile/src/components/Parallax/Parallax";
import ImageLoader from './imageLoader';

import profile from "../mentorProfile/src/assets/img/faces/kendall.jpg";
//assets/img/faces/kendall.jpg"
import studio1 from "../mentorProfile/src/assets/img/examples/studio-2.jpg";
//studio-2.jpg
import aboutme from "../mentorProfile/src/assets/img/examples/studio-5.jpg";
// studio-5.jpg
//


import styles from "../mentorProfile/src/assets/jss/material-kit-react/views/profilePage";
const useStyles = makeStyles(styles);

export default function MenteeProfilePage(props) {

    function handleClick(e) {
        e.preventDefault();
        console.log('hello clicked')
      }

  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header />
      <Parallax
        small
        filter
        image={require("../mentorProfile/src/assets/img/faces/kendall.jpg")}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                   
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Jasmine Tiber</h3>
                    <h6>Photographer</h6>
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
                As a lost college student studying math and computer science at
                the University of Madison, stuck in a particularly brutal
                Wisconsin winter my sophomore year, I decided I needed to
                finally figure out what to do with my life. Growing up in New
                York, I was used to the cold, but not like this. Those Wisconsin
                winters really make you question your life.I consider myself
                incredibly lucky to be doing what I do, and I try to share my
                passion for photography and the city with everyone that I work
                with. If you would like to consider mentoring me, I would
                love to speak with you.{" "}
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
                            <h2>Capture A Moment In Time</h2>
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
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                            <h2>My First Internship</h2>
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
                            <h2>On The Road Again</h2>
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
                            <h2>What I Bring To The Table</h2>
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
                  ]}
                />
              </GridItem>
            </GridContainer>
            <Button>Edit Profile</Button>  
            {/* <Button onClick={ () => { Actions.profileEdit(); } }>Edit Profile</Button> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
