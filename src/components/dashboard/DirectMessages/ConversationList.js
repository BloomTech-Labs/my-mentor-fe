import React, {useState} from 'react';
import Messages from './Messages';
import axios from 'axios';
import { Modal, Button } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import './DirectMessages.css';

const ConversationList = (props) => {
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
               {props.conversation.user_2}
            </div>
            <Modal
                title={props.conversation.user_2}
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
                <Messages conversation={props.conversation} currentUser={props.currentUser}/>
            </Modal>
        </>
    )
}

export default ConversationList;