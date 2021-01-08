import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar variant='dark' expand='lg' bg='primary' collapseOnSelect>
        <Container>
        <Navbar.Brand href='/'>Shark Colours</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='/about'><i class="fas fa-search"></i> About</Nav.Link>
            <Nav.Link href='/contact'><i class="fas fa-address-card"></i> Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
