import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className='text-center'>
          <Col md={6} className='py-3'>
            &copy; Shark Colours. All Rights Reserved.
          </Col>
          <Col md={6} className='py-3'>
            <a
              className='px-3'
              href='https://instagram.com/shark_colours'
              rel='noreferrer'
              target='_blank'
            >
              <i className='fab fa-instagram'></i>
            </a>
            <a className='px-3' href='https://wa.me/2348098754413' rel='noreferrer' target='_blank'>
              <i className='fab fa-whatsapp'></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
