import { Link } from "react-router-dom";
import "./style.css";
import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import About from "../../pages/About"
import Portfolio from "../../pages/Portfolio"


function HomeModal() {
    const [smShow, setSmShow] = useState(false);
    const [aboutShow, setAboutShow] = useState(false);
    const [portfolioShow, setPortfolioShow] = useState(false);
    const [stellaPics, setStellaPics] = useState(false);

  
    return (
      <>
        <Button className="modal-button" variant="light" onClick={() => setAboutShow(true)}>About Me</Button>
        <Button className="modal-button" variant="light" onClick={() => setPortfolioShow(true)}> Portfolio </Button>
        <Button className="modal-button" variant="light" onClick={() => setStellaPics(true)}> My Dog </Button>
        <Button className="modal-button" variant="light" onClick={() => setSmShow(true)}> Contact </Button>{' '}

      <Modal
        size="lg"
        show={aboutShow}
        onHide={() => setAboutShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> <About/> </Modal.Body>
      </Modal>
      </>
    );
  }
  
  export default HomeModal;
