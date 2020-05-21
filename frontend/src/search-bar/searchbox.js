import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      width: '20ch',
    },
  },
}));

export default function SearchBarBasic() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Search" />

    </form>
  );
}

// render () { 
  // let filteredContact = this.props.mentors.filter(
  //   (mentor) => {
  //     return mentor.name.toLowerCase().indexOf(
  //       this.state.search.toLowerCase()) !== -1;
  //   }
  // );
  // return (
  //   <div>
  //     <ul>
  //       {filteredContact.map((mentor) => {
  //         return 
  //           <Mentor 
  //             mentor={mentor}
  //             key={mentor.id}
  //             />
  //       })}
  //     </ul>
  //   </div>
  // )
// }