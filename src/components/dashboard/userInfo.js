import React from 'react';
import { Layout, Card, Col, Row } from 'antd';
import { FormOutlined } from '@ant-design/icons';
const { Meta } = Card;


const UserInfo = () => {
   
    return(
        <Layout>
            <Row flex="auto" justify="center">
                <Col>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Alisha Hickson"/>
                        <p>
                            Fashion Designer <FormOutlined /> <br/>
                            Duluth, GA <FormOutlined /> 
                        </p>
                    </Card>
                </Col>
                    <Col flex="auto" style={{marginTop: "1%"}} >
                        <Row  gutter={[16,{ xs: 24, sm: 24, md: 24, lg: 32 }]} flex="auto" justify="space-around">
                        <Col xs={20} sm={12} md={12} lg={10}>
                            <Card style={{height: 400}} title="Messages" bordered={false}>
                            Messages content here
                            </Card>
                        </Col>
                        <Col gutter={10}xs={20} sm={12} md={12} lg={10} >
                            <Card style={{height: 400}} title="Mentees" bordered={false}>
                            Mentees subscribed to content here
                            </Card>
                        </Col>
                        </Row>
                    </Col>
            </Row>
        </Layout>
    )
};

export default UserInfo;