import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { authLogout } from "@store/auth/authSlice";
import { actGetWishlist } from "@store/wishlist/wishlistSlice";
import { NavLink } from "react-router-dom";
import {Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import HeaderLeftBar from "./HeaderLeftBar/HeaderLeftBar";
import logo from "@assets/Screenshot_2024-09-19_113925-removebg-preview.png";
import UserProfile from "@assets/svg/user-alt-1-svgrepo-com.svg?react";


import styles from "./styles.module.css";

const { headerContainer, dropdown, dropdown2 } = styles;


const Header = () => {
  const dispatch = useAppDispatch();

  const { accessToken, user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken) {
      dispatch(actGetWishlist("ProductIds"));
    }
  }, [dispatch, accessToken]);

  return (
    <header>
      <Navbar
        expand="lg"
        // className="bg-body-tertiary"
        // bg="dark"
        // data-bs-theme="dark"
      >
        <Container className={headerContainer}>
          <Navbar.Brand href="/">
            <img src={logo} alt="" height="50px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="categories">
                Categories
              </Nav.Link>
              <Nav.Link as={NavLink} to="about-us">
                About
              </Nav.Link>
            </Nav>

            <HeaderLeftBar />

            <Nav>
              {!accessToken ? (
                <>
                  <NavDropdown
                  // svgIcon={<UserProfile title="cart" />}
                     title={<UserProfile  />}
                    id="basic-nav-dropdown"
                    className={dropdown2}
                  >
                   
                    <NavDropdown.Item
                      as={NavLink}
                      to="login"
                      className={dropdown2}
                    >
                      Login
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="register">
                      Register
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <NavDropdown
                    title={` ${user?.firstName}  ${user?.lastName} `}
                    id="basic-nav-dropdown"
                    className={dropdown}
                  >
                    <NavDropdown.Item as={NavLink} to="profile/accountsettings">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="profile/orders">
                      Orders
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      as={NavLink}
                      to="/"
                      onClick={() => dispatch(authLogout())}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
