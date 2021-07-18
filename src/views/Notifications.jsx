/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Card,
  Container,
  Table,
  Spinner
} from 'react-bootstrap';
import { getNotification } from 'API/callAPI';

function Notifications() {
  const [listNotice, setNotice] = useState();
  const showNotice = (list) => {
    if (list.length > 0) {
      return list.map((prop, key) => (
        <tr key={key}>
          <td>
            {key + 1}
          </td>
          <td>
            {prop.title}
          </td>
          <td>
            {prop.message}
          </td>
          <td>
            <NavLink
              to="#"
              className="nav-link text-danger"
              activeClassName="active"
            >
              <i className="nc-icon nc-simple-remove" />
              {' '}
              Delete
            </NavLink>
          </td>
        </tr>
      ));
    }
    return (
      <tr>
        {' '}
        <td className="text-warning">No announcements</td>
      </tr>
    );
  };

  useEffect(() => {
    getNotification().then((data) => {
      setNotice(data);
    });
  }, []);
  return (
    <>
      <Container fluid>
        <Card>
          <Card.Header>
            <Card.Title as="h4">Notifications</Card.Title>
            <small>
              <NavLink to="/admin">... admin </NavLink>
              / notifications
            </small>
          </Card.Header>
          <Card.Body>
            <Table className="table-hover">
              <thead>
                <tr>
                  <th className="border-0">Number of row</th>
                  <th className="border-0">Title</th>
                  <th className="border-0">Content Notication</th>
                  <th className="border-0">Action</th>
                </tr>
              </thead>
              <tbody>
                {listNotice ? showNotice(listNotice) : (
                  <tr>
                    <td>
                      Loading...
                      &emsp;
                      <Spinner animation="border" variant="warning" size="sm" />
                    </td>
                  </tr>

                )}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Notifications;
