import React, { useState } from "react";
import { Button, Modal, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./browseMentor.css";

const Mentor = (props) => {
  const [modal, setModal] = useState(false);

  const handleClose = () => setModal(false);

  const renderModal = () => {
    return (
      <div>
        <>
          <Modal show={modal} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
        <div>
          <Modal show={modal} onHide={handleClose}>
            <Modal.Header closeButton onClick={handleClose}>
              <Modal.Title>{props.mentor.first_name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={props.mentor.image} />
                <Card.Body>
                  <Card.Text>{props.mentor.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{props.mentor.title}</ListGroupItem>
                  <ListGroupItem>{props.mentor.city}</ListGroupItem>
                  <ListGroupItem>{props.mentor.state}</ListGroupItem>
                </ListGroup>
              </Card>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => setModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  };

  return (
    <>
      {modal && renderModal()}
      <div className="gridContainer1">
        <img
          alt={props.mentor.first_name}
          src={props.mentor.image}
          onClick={() => setModal(true)}
        />

        <div className="userInfo">
          {props.mentor.first_name} {props.mentor.last_name} <br />
          {props.mentor.profession} <br />
          {props.mentor.city}, {props.mentor.state}
        </div>
      </div>
    </>
  );
};
export default Mentor;
