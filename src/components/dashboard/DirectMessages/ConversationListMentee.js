import React, {useState} from 'react';
import MessagesMentee from './MessagesMentee';
import axios from 'axios';
import { Modal, Button } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import './DirectMessages.css';

const ConversationListMentee = (props) => {
    const [state, setState] = useState({ visible: false });
   
    const showModal = () => {
        setState({ visible: true })
    }

    const handleClose = e => {
        setState({ visible: false })
    }

    return(
        <>
            <div className='conversation' onClick={showModal}>
               {props.conversation.user_1}
            </div>
            <Modal
                title={props.conversation.user_1}
                visible={state.visible}
                onCancel={handleClose}
                footer={[
                    <>
                        <Button key='back' type='primary' ghost onClick={handleClose} >
                            Close
                        </Button>
                    </>
                ]}
            >
                <MessagesMentee conversation={props.conversation} currentUser={props.currentUser}/>
            </Modal>
        </>
    )
}

export default ConversationListMentee;