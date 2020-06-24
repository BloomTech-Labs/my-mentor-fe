import React from "react";

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
import Header from "../../components/Header/Header";
import MentorHeader from "../../../../home-components/nav-drawer";
import Footer from "../../components/Footer/Footer.js";
import Button from "../../components/CustomButtons/Button.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import NavPills from "../../components/NavPills/NavPills.js";
import Parallax from "../../components/Parallax/Parallax";

import profile from "../../assets/img/faces/christian.jpg";
//assets/img/faces/christian.jpg

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

export default function ProfilePage(props) {
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
      <MentorHeader />
      <Parallax
        small
        filter
        image={require("../../assets/img/faces/christian.jpg")}
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
                    <h3 className={classes.title}> Christian Louboutin</h3>
                    <h6>DESIGNER</h6>
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
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{" "}
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
            <Button>Edit Profile</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
