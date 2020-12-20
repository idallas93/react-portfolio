import "./style.css";
import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import About from "../../pages/About";
import Portfolio from "../../pages/Portfolio";
import StellaCarousel from "../../components/StellaCarousel"
import ContactInfo from "../../components/ContactInfo"




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
          <Modal.Title id="example-modal-sizes-title-lg" className="modal-title">
            About Me
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> <About/> </Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={portfolioShow}
        onHide={() => setPortfolioShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" className="modal-title">
            Portfolio
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> <Portfolio/> </Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={stellaPics}
        onHide={() => setStellaPics(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" className="modal-title">
            Stella the Dog!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> <StellaCarousel/> </Modal.Body>
      </Modal>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Contact Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactInfo/>
        </Modal.Body>
      </Modal>
      </>
    );
  }
  
  export default HomeModal;
