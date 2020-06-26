import React, { useState, useEffect } from 'react';
import ConversationsMentee from './DirectMessages/ConversationsMentee';
import { AxiosWithAuth } from '../../middleware/axioswithauth';
import { Layout, Card, Col, Row } from 'antd';
import { FormOutlined } from '@ant-design/icons';
const { Meta } = Card;


const UserInfoMentee = (props) => {
     const [mentors, setMentors] = useState([]);

     useEffect(() => {
        AxiosWithAuth()
        .get('https://mentor-be.herokuapp.com/api/mentor')
        .then(res => {
            setMentors(res.data)
        })
    }, [])
    const name = `${props.currentUser.first_name} ${props.currentUser.last_name}`;
    return(
        <Layout>
            <Row flex="auto" justify="center">
                <Col>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={props.currentUser.image} />}
                    >
                        <Meta title={name}/>
                        <p>
                            {props.currentUser.title} <FormOutlined /> <br/>
                            {props.currentUser.city}, {props.currentUser.state} <FormOutlined /> 
                        </p>
                    </Card>
                </Col>
                    <Col flex="auto" style={{marginTop: "1%"}} >
                        <Row  gutter={[16,{ xs: 24, sm: 24, md: 24, lg: 32 }]} flex="auto" justify="space-around">
                        <Col xs={20} sm={12} md={12} lg={10}>
                            <Card style={{height: 400}} title="Messages" bordered={false}>
                            <ConversationsMentee currentUser={props.currentUser} mentor={mentors}/>
                            </Card>
                        </Col>
                        <Col gutter={10}xs={20} sm={12} md={12} lg={10} >
                            <Card style={{height: 400}} title="Mentors" bordered={false}>
                            Mentor subscribed to content here
                            </Card>
                        </Col>
                        </Row>
                    </Col>
            </Row>
        </Layout>
    )
};

export default UserInfoMentee;