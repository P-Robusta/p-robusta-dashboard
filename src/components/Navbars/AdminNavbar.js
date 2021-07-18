/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable func-names */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useLocation, useHistory, NavLink } from 'react-router-dom';
import {
  Navbar, Container, Nav, Dropdown, Button
} from 'react-bootstrap';
import { getNotification } from 'API/callAPI';

function Header() {
  const history = useHistory();
  const location = useLocation();
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle('nav-open');
    const node = document.createElement('div');
    node.id = 'bodyClick';
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle('nav-open');
    };
    document.body.appendChild(node);
  };
  const [listNotice, setNotice] = useState();

  const showNotice = (list = []) => {
    if (list.length > 0) {
      return list.map((prop, key) => (
        <Dropdown.Item>
          <div className="text-warning">{prop.title}</div>
        </Dropdown.Item>
      ));
    }
    return (
      <Dropdown.Item>
        {' '}
        <div className="text-warning">No announcements</div>
      </Dropdown.Item>
    );
  };

  useEffect(() => {
    getNotification().then((data) => {
      setNotice(data);
    });
  }, []);
  async function LogOut() {
    console.log('logout');
    await localStorage.removeItem('__token__');
    await sessionStorage.removeItem('__token__');
    history.replace('/login');
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}
          >
            <i className="fas fa-ellipsis-v" />
          </Button>
          <Navbar.Brand
            href="#home"
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          />
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines" />
          <span className="navbar-toggler-bar burger-lines" />
          <span className="navbar-toggler-bar burger-lines" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" navbar>
            <Nav.Item>
              <Nav.Link
                data-toggle="dropdown"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className="m-0"
              >
                <span className="d-lg-none ml-1">Dashboard</span>
              </Nav.Link>
            </Nav.Item>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                as={Nav.Link}
                data-toggle="dropdown"
                id="dropdown-67443507"
                variant="default"
                className="m-0"
              >
                <i className="nc-icon nc-bell-55" />
                <span className="notification">{listNotice && listNotice.length}</span>
                <span className="d-lg ml-1">Notification</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {showNotice(listNotice)}
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="nc-icon nc-zoom-split" />
                <span className="d-lg-block"> Search</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ml-auto" navbar>
            <Nav.Item>
              <Nav.Link
                className="m-0"
                onClick={() => LogOut()}
              >
                <span className="no-icon">Log out</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
