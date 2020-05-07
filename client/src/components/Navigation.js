import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Navigation = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar dark style={{ backgroundColor: "#2d3436" }} light>
        <NavbarBrand href="/" className="mr-auto">
          <h1>Prayer Warriors</h1>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink
                onClick={toggleNavbar}
                style={{ color: "#ffafa" }}
                tag={RRNavLink}
                exact
                to="/"
                activeClassName="activeNavButton"
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={toggleNavbar}
                style={{ color: "#ffafa" }}
                tag={RRNavLink}
                exact
                to="/prayers"
                activeClassName="activeNavButton"
              >
                Prayer List
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
