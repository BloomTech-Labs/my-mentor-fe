import React, {useState} from 'react';
import Messages from './Messages';
import { Modal, Button } from 'antd';

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
                // onOk={handleClose}
                onCancel={handleClose}
                // okText='Close Message'
                footer={[
                    <Button key='back' type='primary' onClick={handleClose} >
                        Close Message
                    </Button>
                    
                ]}
            >
                <Messages conversation={props.conversation} currentUser={props.currentUser}/>
            </Modal>
        </>
    )
}

export default ConversationList;