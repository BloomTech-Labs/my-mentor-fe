import { conatinerFluid } from "../../../material-kit-react";
//assets/jss/material-kit-react.js
import imagesStyle from "../../../material-kit-react/imagesStyles";
//assets/jss/material-kit-react/imagesStyles.js
const exampleStyle = {
  section: {
    padding: "70px 0"
  },
  container: {
    ...conatinerFluid,
    textAlign: "center !important"
  },
  ...imagesStyle,
  link: {
    textDecoration: "none"
  }
};

export default exampleStyle;
