import React, { useState } from "react";
import { connect } from "react-redux";
import { Layout, Card, Col, Row } from "antd";
import { FormOutlined } from "@ant-design/icons";
import {
  updatePost,
  deletePost,
  addMentorPost
} from "../../redux/actions/userActions";

const { Meta } = Card;

const initialState = {
  post: "",
};

const UserInfo = ({ addMentorPost, postSuccess }) => {
  const [post, setPost] = useState(initialState);

  const changeHandler = (e) => {
    e.persist();
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMentorPost(post);
    setPost(initialState);
  };

  return (
    <Layout>
      <Row flex="auto" justify="center">
        <Col>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Alisha Hickson" />
            <p>
              Fashion Designer <FormOutlined /> <br />
              Duluth, GA <button>Edit Location</button>
            </p>
          </Card>
        </Col>
        <Col flex="auto" style={{ marginTop: "1%" }}>
          <Row
            gutter={[16, { xs: 24, sm: 24, md: 24, lg: 32 }]}
            flex="auto"
            justify="space-around"
          >
            <Col xs={20} sm={12} md={12} lg={10}>
              <Card style={{ height: 400 }} title="Messages" bordered={false}>

                <form onSubmit={handleSubmit}>
                  <textarea
                    rows="3"
                    cols="25"
                    type="text"
                    name="post"
                    onChange={changeHandler}
                    placeholder="Post"
                    value={post.post}
                  />
                  {postSuccess && <h2>{postSuccess}</h2>}<br/>
                  <button>Add Post</button>

                </form>
              </Card>
            </Col>
            <Col gutter={10} xs={20} sm={12} md={12} lg={10}>
              <Card style={{ height: 400 }} title="Mentors" bordered={false}>
                Mentor subscribed to content here
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

function mapStateToProps(state) {
    return {
        postSuccess: state.postSuccess
    }
}

export default connect(mapStateToProps, { addMentorPost })(UserInfo);
