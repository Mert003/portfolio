import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import database from "../../images/database.jpg";
import Writing from "../../images/writing.jpg";
import programming from "../../images/programming.jpg";
import code from "../../images/code.jpg";
import versioncs from "../../images/versioncontrolsystems.jpg";
import Coding from "../../images/coding4.jpg";
import "./prompt.css";
const Prompt = () => {
  return (
    <Container fluid className='my-5 col-12 col-lg-9 p-3 ' id='other'>
      {/* Header */}
      <h1 className="text-center prompt-main-header">Diverse Skill Set</h1>

      {/* Paragraph */}
      <p className="text-center prompt-main-description ">
      Crafting digital magic with precision and teamwork. Discover what makes me stand out.
      </p>

      {/* Three Columns */}
      <Row className='row '>
        {/* Column 1 */}
        <Col sm={12} md={4}  className="text-center prompt-col my-3 my-md-0">
          <img
            src={database}
            alt="Feature 1"
            className="img-fluid rounded"
          />
          <div className='mx-auto' style={{width:"95%"}}>
          <h2  className='mt-4 my-md-3'>Database Management</h2>
          <p>Database Maestro: Designing, optimizing, and securing data. Fluent in crafting powerful queries for actionable insights. </p>
          </div>
        </Col>

        {/* Column 2 */}
        <Col sm={12} md={4} className="text-center prompt-col my-3 my-md-0">
          <img
            src={code} 
            alt="Feature 2"
            className="img-fluid rounded"
          />
           <div className='mx-auto' style={{width:"95%"}}>
          <h2  className='mt-4 my-md-3'>Code Architect</h2>
          <p>Proficient in diverse programming languages, I specialize in crafting elegant solutions. A dedicated problem solver, I transform ideas into seamless digital experiences professionalism.</p>
          </div>
        </Col>

        {/* Column 3 */}
        <Col sm={12} md={4} className="text-center prompt-col my-3 my-md-0">
          <img
            src={versioncs} 
            alt="Feature 3"
            className="img-fluid rounded"
          />
          <div className='mx-auto' style={{width:"95%"}}>
          <h2 className='mt-4  my-md-3'>Version Control Systems</h2>
          <p>Navigating collaborative coding landscapes with expertise in Git and more. Orchestrating project harmony for seamless teamwork and efficiency.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Prompt;
