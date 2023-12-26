import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import computer from "../../images/computer.jpg";
import { FaHandshake } from "react-icons/fa";
import "./aboutme.css";

const Aboutme = () => {
  return (
    <Container className='Container my-5' id='about'>
      <Row className='row  d-flex justify-content-center'>
        {/* First Column with Image */}
        <Col sm={12} md={6} lg={4} className=' align-self-center'>
          <img
            src={computer} // Replace with your image URL
            alt="Sample"
            className="img-fluid w-100 object-fit-cover object-position-center rounded"
          />
        </Col>

        {/* Second Column with Header and Paragraph */}
        <Col sm={12} md={6} lg={4}>
          <div className='aboutmeInfo'>
            <h6 className='text-info'>About Me</h6>
            <h2>Building Tomorrow's Tech Today: Meet Your Dev Partner <FaHandshake /></h2>

            <p>
              Hi, I'm Osman Mert Sevil, a full-stack developer with a background in
              vocational high school and currently pursuing a degree in
              Informational Systems Engineering. I specialize in creating
              interfaces, working on both frontend and backend development, and
              managing databases with efficient queries.  I also use AI to help with
              making better content, illustrations, images, and coding more efficiently.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Aboutme;
