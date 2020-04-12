import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand } from 'mdbreact';

class Header extends Component {
  state = {
    collapseID: '',
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));

  render() {
    return (
      <MDBNavbar color='unique-color-dark' style={{ marginTop: '0px' }} dark>
        <MDBNavbarBrand href='/'>
          <img
            src='https://mdbootstrap.com/img/logo/mdb-transparent.png'
            height='30'
            alt=''
          />
        </MDBNavbarBrand>
      </MDBNavbar>
    );
  }
}

export default Header;
