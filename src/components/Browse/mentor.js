import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import "./browseMentor.css";

const Mentor = (props) => {
  const [modal, setModal] = useState(false);

  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);

  // useEffect(() => {
  //   axios
  //     .get("https://mentor-be.herokuapp.com/api/mentor", {
  //       headers: { Authorization: localStorage.getItem("token") },
  //     })
  //     .then((res) => {
  //       const mentors = res.data.json();
  //       setMentor(mentors);
  //     });
  // }, []);

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
          <Modal show={modal}>
            <Modal.Header closeButton onClick={handleClose}>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              Woohoo, you're reading this text in a modal!
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
