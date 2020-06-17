import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updatePost, deletePost } from "../../redux/actions/userActions";


const MentorPostCard = ({post: {id, post}, updatePost, deletePost}) => {
  const [post, setPost] = useState({post: []})

  const classes = useStyles();

  const changeHandler = e => {
    e.persist();
    setPost({...post, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    updatePost(id, post)
  }

  const handleDelete = e => {
    e.preventDefault();
    deletePost(id);
  }

  return (
    <div>
      <div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <label>Post: {id}
          <textarea rows='3' cols='25'
          type='text'
          name='post'
          onChange={changeHandler}
          placeholder='Post'
          value={post.post}
          />
          </label>
          <button>Save Post</button>
        </form>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    
  }
}

export default connect(mapStateToProps, { updateJoke, deleteJoke })(AdminCard);