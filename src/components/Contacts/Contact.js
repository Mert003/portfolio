import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import "./Contact.css";

const Contact = () => {
  return (
    <Container fluid className='contact-container py-5 d-flex flex-column align-items-center justify-content-center ' id='contact'>
      <Row>
        <Col className='contact-headers'>
          <h6>Contact Me</h6>
          <h3>Want to connect? Drop a message, and I'll get back to you.</h3>
        </Col>
      </Row>

      <Row className='w-md-75 w-sm-100 mt-3 '>

        <Col className='d-flex flex-row align-items-center justify-md-content-center justify-sm-content-start contact-info'>
          <FaMapMarkerAlt size={32} />
          <div className='d-flex flex-column mx-3 '>
            <p className='m-0'>Location</p>
            <p className='m-0'>Kocaeli, Turkey</p>
          </div>
        </Col>

        <Col className='d-flex flex-row align-items-center justify-md-content-center justify-sm-content-start  contact-info'>
          <FaEnvelope size={32} />
          <div className='d-flex flex-column mx-3'>
            <p className='m-0'>Mail</p>
            <p className='m-0'>osman.sevil003@gmail.com</p>
          </div>
        </Col>

      </Row>
    </Container>
  );
};

export default Contact;
