import React from "react";
import { Nav, Navbar, NavbarBrand, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, withRouter } from "react-router-dom";
// import { Telegram } from "@material-ui/icons";
import "./Header.css";
import { Typography } from "@material-ui/core";
import techData from "../../Utility/techData";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Header = (props) => {
  const pathName = props?.location?.pathname;
  return (
    <>
      <Navbar expand="lg" sticky="top" className="header">
        {/* Home link */}
        <Nav.Link as={NavLink} to="/" className="header_navlink">
          <NavbarBrand className="header_home">
            <img src="Images/logo/logo.jpg" alt="anirbanit" />
            <Typography variant="h5" className="header_home_title">
              {techData.name}
            </Typography>
          </NavbarBrand>
        </Nav.Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="header_left">
            {/* newsroom */}
            <Nav.Link
              as={NavLink}
              to="/newsroom"
              className={
                pathName === "/newsroom" ? "header_link_active" : "header_link"
              }
            >
              Newsroom
            </Nav.Link>
            {/* Service*/}
            <Nav.Link
              as={NavLink}
              to="/service"
              className={
                pathName === "/service" ? "header_link_active" : "header_link"
              }
            >
              Service
            </Nav.Link>
            {/* Career Link */}
            <Nav.Link
              as={NavLink}
              to="/career"
              className={
                pathName === "/career" ? "header_link_active" : "header_link"
              }
            >
              Career
            </Nav.Link>
            {/* about Link */}
            <Nav.Link
              as={NavLink}
              to="/about"
              className={
                pathName === "/about" ? "header_link_active" : "header_link"
              }
            >
              About
            </Nav.Link>

            {/* dropdown menu */}
            <NavDropdown
              title={<AccountCircleIcon className="header_icon_color" />}
              id="basic-nav-dropdown"
              className="header_link_active header_link"
            >
              <NavDropdown.Item>
                {/* sing up Link */}
                <Nav.Link
                  as={NavLink}
                  to="/singup"
                  className={
                    pathName === "/singup"
                      ? "header_link_active"
                      : "header_link"
                  }
                >
                  Sing Up
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {/* login Link */}
                <Nav.Link
                  as={NavLink}
                  to="/login"
                  className={
                    pathName === "/login" ? "header_link_active" : "header_link"
                  }
                >
                  Log In
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link
                  as={NavLink}
                  to="/income"
                  className={
                    pathName === "/income"
                      ? "header_link_active"
                      : "header_link"
                  }
                >
                  Check Income
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link
                  as={NavLink}
                  to="/expence"
                  className={
                    pathName === "/expence"
                      ? "header_link_active"
                      : "header_link"
                  }
                >
                  Check Expance
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link
                  as={NavLink}
                  to="/services"
                  className={
                    pathName === "/services"
                      ? "header_link_active"
                      : "header_link"
                  }
                >
                  Check E/A
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link
                  as={NavLink}
                  to="/services"
                  className={
                    pathName === "/services"
                      ? "header_link_active"
                      : "header_link"
                  }
                >
                  Notice
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link
                  as={NavLink}
                  to="/services"
                  className={
                    pathName === "/services"
                      ? "header_link_active"
                      : "header_link"
                  }
                >
                  Admin
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
            {/* contact Link */}
            <Nav.Link
              as={NavLink}
              to="/contact"
              className={
                pathName === "/contact" ? "header_link_active" : "header_link"
              }
            >
              Contact
            </Nav.Link>
          </Nav>
          {/* <div className="header_right">
            {Object.keys(techData.socials).map((key) => (
              <a
                href={techData.socials[key].link}
                target="_blank"
                rel="noreferrer"
              >
                {techData.socials[key].icon}
              </a>
            ))}
            <Link exact to="/contact"></Link>
            <Nav.Link as={NavLink} to="/contact">
              <CustomButton text={"Hire Me"} icon={<Telegram />} />
            </Nav.Link>
          </div> */}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default withRouter(Header);
