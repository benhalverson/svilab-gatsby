// import PropTypes from 'prop-types';
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import logo from '../images/logo-left.png';

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  props = this.props;

  state = {
    collapsed: true
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <div>
        <Navbar
          color="faded"
          sticky="top"
          light
          className="navbar navbar-expand-lg navbar-light bg-light"
        >
          <NavbarBrand href="/" className="mr-auto">
            <img src={logo} alt="logo for sv-ilab" width="200" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                {/* <NavLink href="/contact">
                  Contact
                </NavLink> */}
                {/* Hide contact page until a proper form is made */}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
