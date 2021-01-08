import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar variant='dark' expand='lg' bg='primary' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>
            <a href='/'>
              <img
                src={process.env.PUBLIC_URL + '/img/shark__6_white.png'}
                alt='Shark Colours'
                className='shark-logo p-2'
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/about'>
                <i class='fas fa-search'></i> About
              </Nav.Link>
              <Nav.Link href='/contact'>
                <i class='fas fa-address-card'></i> Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
