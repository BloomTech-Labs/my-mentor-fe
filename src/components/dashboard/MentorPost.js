import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMentorPost } from '../../redux/actions/userActions';


import { makeStyles } from "@material-ui/core/styles";
import { UserInfo } from './userInfo';
import { MentorPostCard } from "./MentorPostCard";

const useStyles = makeStyles({
  background:{
    backgroundColor: '#A8D0E6',
    height: '100%',
    width: '100%'
  }
})

const MentorPost = ({ getMentorPost, posts }) => {
  useEffect(() => {
    if (posts.length === 0) {
      getMentorPost();
    }
  }, [getMentorPost, posts.length])
  
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <UserInfo />
      {posts.map(post => {
        return (
          <MentorPostCard key={post.id} post={post} />
        )
      })}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { getMentorPost })(MentorPost);