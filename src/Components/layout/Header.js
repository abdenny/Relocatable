import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class Header extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar color='indigo' dark expand='md'>
          <MDBNavbarBrand>
            <img alt='' width='40px' src='logo192.png'></img>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active style={{ marginRight: '20px' }}>
                <a href='/'>
                  <div className='white-text'> Home</div>
                </a>
              </MDBNavItem>

              <MDBNavItem>
                <a href='/about'>
                  <div className='white-text'> About</div>
                </a>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <a
                  href='https://github.com/abdenny/Relocatable'
                  target='_blank'
                  className='nav-link Ripple-parent'
                >
                  <MDBIcon size='lg' fab icon='github' />
                </a>
              </MDBNavItem>
              <MDBNavItem>
                <a
                  href='https://www.linkedin.com/in/austin-denny-0b77a8197/'
                  target='_blank'
                  className='nav-link Ripple-parent'
                >
                  <MDBIcon size='lg' fab icon='linkedin' />
                </a>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default Header;
