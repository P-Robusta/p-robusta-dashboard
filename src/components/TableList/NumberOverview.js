/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/no-unresolved */
import { getBanner } from 'API/callAPI';
import React, { useEffect, useState } from 'react';
import { Card, Spinner, Table } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import AddBanner from './Modal/Banner/AddBanner';

export default function NumberOverview() {
  const [listBanner, setList] = useState();
  const show = (list) => {
    if (list.length) {
      return list.map((prop, key) => (
        <tr key={key}>
          <td>
            {key + 1}
          </td>
          <td>
            Content:
            {prop.text}
          </td>
          <td><img width="100" height="70" src={prop.image} alt="image of banner" /></td>
          <td>
            <NavLink
              to="#"
              className="nav-link"
              activeClassName="active"
            >
              {' '}
              Manage This Banner
            </NavLink>
          </td>
        </tr>
      ));
    }
  };
  useEffect(() => {
    getBanner().then((data) => {
      setList(data);
    });
  }, []);

  return (
    <div>
      <Card className="strpied-tabled-with-hover">
        <Card.Header>
          <Card.Title as="h4">
            Number Overview Table
          </Card.Title>
          <small>
            <NavLink to="/admin">... admin </NavLink>
            /
            <NavLink to="/admin/table"> list table </NavLink>
            / number overview
          </small>
        </Card.Header>
        <Card.Body className="table-full-width table-responsive px-0">
          <br />
          <AddBanner />
          <br />
          <Table className="table-hover">
            <thead>
              <tr>
                <th className="border-0">Number List</th>
                <th className="border-0">Text</th>
                <th className="border-0">Image</th>
                <th className="border-0">Action</th>
              </tr>
            </thead>
            <tbody>
              {listBanner ? show(listBanner) : (
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
    </div>
  );
}
