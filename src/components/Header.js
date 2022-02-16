import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import logo from './logo.jpg';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img
                alt=''
                src={logo}
                width='50'
                height='50'
                className='d-inline-block align-top'
              />
            </Navbar.Brand>
          </LinkContainer>
          <LinkContainer to='/'>
            <Navbar.Brand>Test</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <LinkContainer to='/login'>
              <Nav.Link>
                <i className='fas fa-user'></i>Sign In
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/register'>
              <Nav.Link>
                <i className='fas fa-user'></i>Register
              </Nav.Link>
            </LinkContainer>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
