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
        <div class='row'>
        <div class="col-sm-12 text-center">
        <Button id="modal-buton" className="modal-button" variant="light" onClick={() => setAboutShow(true)}>About Me</Button>
        <Button  id="modal-buton" className="modal-button" variant="light" onClick={() => setPortfolioShow(true)}> Portfolio </Button>
        <Button  id="modal-buton" className="modal-button" variant="light" onClick={() => setStellaPics(true)}> My Dog </Button>
        <Button  id="modal-buton" className="modal-button" variant="light" onClick={() => setSmShow(true)}> Contact </Button>{' '}
        </div>
        </div>
      <Modal
        size="lg"
        show={aboutShow}
        onHide={() => setAboutShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" className="about-title">
            About Me
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className ='modal-body'> <About/> </Modal.Body>
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
