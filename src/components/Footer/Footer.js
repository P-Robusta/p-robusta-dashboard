/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { PureComponent } from 'react';
import { Container } from 'react-bootstrap';

class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <nav>
            <ul className="footer-menu">
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Home
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Company
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Blog
                </a>
              </li>
            </ul>
            <p className="copyright text-center">
              ©
              {' '}
              {new Date().getFullYear()}
              {' '}
              <a href="https://www.facebook.com/passerelles.numeriques">Made by Robusta Team</a>
            </p>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
