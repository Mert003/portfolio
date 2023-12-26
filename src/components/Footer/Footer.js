import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Container fluid>
      <Row className="footer py-5 d-flex flex-row align-items-center justify-content-center">
        <Col xs={5}>
          <p className='m-0 text-center'>© 2023 Your Company. All rights reserved.</p>
        </Col>
        <Col xs={5} className="social-icons text-center">
          <a href="https://github.com/Mert003" target="_blank" rel="noopener noreferrer" className='mx-2' >
            <FaGithub size={32} />
          </a>
          <a href="https://linkedin.com/in/osmanmertsevil" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={32} />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
