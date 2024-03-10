import React, { useState } from "react";
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavLink,UncontrolledDropdown,DropdownMenu,DropdownItem,} from "reactstrap";
import { Link } from "react-router-dom";

const CustomNav = ({isLoggedIn}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const loginLogout = isLoggedIn ? (
    <NavLink tag={Link} to="/logout">
      Logout
    </NavLink>
  ) : (
    <NavLink tag={Link} to="/login">
      Login
    </NavLink>
  );

  return (
    <div className="custom-nav">
      <Navbar color="light" light expand="md" container>
        <NavbarBrand tag={Link} to="/" className="mr-auto">
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2" />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <UncontrolledDropdown nav inNavbar>
              {isLoggedIn ? (
                <>
                  <DropdownMenu end>
                    <DropdownItem>{loginLogout}</DropdownItem>
                  </DropdownMenu>
                </>
              ) : (
                loginLogout
              )}
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNav;
