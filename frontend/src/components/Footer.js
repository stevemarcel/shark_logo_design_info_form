import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className='text-center'>
          <Col xs={12} className='py-3'>
            &copy; { new Date().getFullYear() } Shark Colours. All Rights Reserved.
          </Col>
          <Col xs={12} className='py-3'>
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
