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
  constructor(props) {
    super(props);
  }

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
        <Navbar color="faded" sticky="top" light className="navbar navbar-expand-lg navbar-light bg-light">
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
// const Header = () => (
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <a className="navbar-brand" href="/">
//       sv-ilab
//     </a>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-toggle="collapse"
//       data-target="#navbarSupportedContent"
//       aria-controls="navbarSupportedContent"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon" />
//     </button>

//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav mr-auto">
//         <li className="nav-item">
//           <a className="nav-link text-capitalize" href="/contact">
//             Contact
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link text-capitalize" href="/about">
//             About
//           </a>
//         </li>
//       </ul>
//     </div>
//   </nav>
// );

// Header.propTypes = {
//   siteTitle: PropTypes.string
// };

// Header.defaultProps = {
//   siteTitle: ``
// };

// export default Header;
