import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";

import project3 from "../../images/project3.png";
import "./projects.css";
import { FaShareSquare } from "react-icons/fa";

const ProjectsComponent = () => {
  return (
    <Container fluid className='project-container text-center py-5' id='projects'>

      <Row className='row d-flex justify-content-center '>
        {/* Project Details Column */}
        <Col sm={12} md={6} lg={5} xl={4} className='project-infos order-2 order-md-1 my-3 my-md-0'>


          <h3>Real Estate Project</h3>
          <p className='px-4'>
            Explore 'Mert Estate' , where modern houses meet innovative technology.
            I've crafted a user-friendly experience using React.js and Bootstrap, ensuring a seamless journey through our property
            listings.Your dream home awaits , where innovation meets comfort.   </p>

          <a href='https://mertestate.netlify.app/' target='_blank'><div className='preview'><p className="text-info">Preview</p> <FaShareSquare /></div></a>

        </Col>

        {/* Project Image Column */}
        <Col sm={12} md={6} lg={5} className='order-1 order-md-2 d-flex align-items-center'>
          <img
            src={project1}
            alt="Project"
            className="img-fluid rounded shadow-lg"
          />
        </Col>
      </Row>


      <Row className='row d-flex justify-content-center my-5'>

        <Col sm={12} md={6} lg={5} className=' d-flex align-items-center' >
          <img
            src={project2}
            alt="Project"
            className="img-fluid rounded shadow-lg"
          />
        </Col>
        {/* Project Details Column */}
        <Col sm={12} md={6} lg={5} xl={4} className='project-infos  my-3 my-md-0'>


          <h3>Save Polar Caps</h3>
          <p className='px-4'>
            Join the movement to save our polar caps! Explore our website dedicated to preserving these icy wonders. Discover the urgent need for action and find ways to contribute to the fight against melting polar caps.   </p>

          <a href='https://savepolarcaps.netlify.app/' target='_blank'><div className='preview'><p className="text-info">Preview</p> <FaShareSquare /></div></a>

        </Col>

        {/* Project Image Column */}

      </Row>



      <Row className='row d-flex justify-content-center my-5'>
        {/* Project Details Column */}
        <Col sm={12} md={6} lg={5} xl={4} className='project-infos order-2 order-md-1  my-3 my-md-0'>


          <h3>AI Gallery</h3>
          <p className='px-4'>
            Embark on a journey through my AI Gallery, where art meets innovation. Immerse yourself in a captivating collection of images crafted by artificial intelligence. Explore the boundless realms of creative expression.  </p>

          <a href='https://aigallery.netlify.app/' target='_blank'><div className='preview'><p className="text-info">Preview</p> <FaShareSquare /></div></a>

        </Col>

        {/* Project Image Column */}
        <Col sm={12} md={6} lg={5} className='order-1 order-md-2  d-flex align-items-center'>
          <img
            src={project3}
            alt="Project"
            className="img-fluid rounded shadow-lg"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsComponent;
