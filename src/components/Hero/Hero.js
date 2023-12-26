// Hero.js
import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./Hero.css";
import { FaGithub, FaLinkedin, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNode, FaCode } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import picture from "../../images/picture.jpg";

const WavingImage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        borderTopLeftRadius: ['30%', '50%', '40%', '35%'],
        borderTopRightRadius: ['30%', '40%', '50%', '35%'],
        borderBottomRightRadius: ['35%', '30%', '40%', '50%'],
        borderBottomLeftRadius: ['40%', '35%', '50%', '30%'],
        transition: { duration: 7, repeat: Infinity, repeatType: 'mirror' },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ borderRadius: '50%' }}
      animate={controls}
      style={{ width: '25rem', height: '100%', overflow: 'hidden' }}
    >
      <img
        src={picture} // Replace with your image URL
        alt="Waving Image"

        style={{ width: "100%", maxWidth: '25rem', minHeight: '20rem', objectFit: "cover", objectPosition: "center" }}
      />
    </motion.div>
  );
};



const Hero = () => {


  return (
    <div className='d-flex align-items-center  py-5 py-lg-0 herocomponent' id='hero'>
      <Container fluid  >
        <Row className='Row align-items-center justify-content-center text-center hero-row '>

          <Col className='col-12 col-lg-4 order-2 order-lg-1  px-md-5 d-flex flex-column justify-content-evenly  hero-text'>
            <h1 className='my-3' >Osman Mert Sevil</h1>
            <h3 className='my-3'>  A Full Stack Developer</h3>
            <p className='my-3 w-md-75 w-lg-100'>
              I love turning ideas into cool digital stuff. I know how to make things work online, and I also like making them look good. Let's work together and create awesome things for the future!
            </p>
            <div className='my-3'>
           <a href='https://github.com/Mert003' target='_blank' ><FaGithub className='mx-2 fs-1'/></a>
           <a href='https://linkedin.com/in/osmanmertsevil' target='_blank' ><FaLinkedin className='mx-2 fs-1'/></a>
            </div>
          </Col>


          <Col className='col-12 col-lg-4  order-1 order-lg-2 d-flex justify-content-center'>
            <WavingImage />
          </Col>

        </Row>

        <Row className='hero-icons my-5 mx-auto'>

          {/*     
      <Col className='col d-flex justify-content-center text-center '>
        <h4 className='my-auto'> <FaCode /> </h4>
        </Col> */}


          <Col className='col hero-icons-col  text-center'>
            <FaHtml5 color='orange' className='mx-1' />
            <FaCss3Alt color='blue' className='mx-1' />
            <FaBootstrap color='purple' className='mx-1' />
          </Col>

          <Col className='col hero-icons-col  text-center'>
            <IoLogoJavascript color='gold' className='mx-1' />
            <FaReact color='blue' className='mx-1' />
          </Col>

          <Col className='col hero-icons-col text-center'>
            <FaNode color='green' className='mx-1' />
            <BsFiletypeSql color='darkred' className='mx-1' />
          </Col>

          <Col className='col hero-icons-col text-center d-flex align-items-center justify-content-center my-2 my-md-0'>
            <SiTypescript color='darkblue' className='mx-1' />
            <SiNextdotjs color='navyblue' className='mx-1' />
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Hero;