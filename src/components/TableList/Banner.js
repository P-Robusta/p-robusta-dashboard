/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-unresolved */
import { getBanner } from 'API/callAPI';
import React, { useEffect } from 'react';
import {
  Card, Spinner, Table
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import AddBanner from './Modal/Banner/AddBanner';

export default function Banner() {
  const [listBanner, setList] = useState();
  const show = (list) => {
    console.log(`list: ${list}`);
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
            Banner Table
          </Card.Title>
          <small>
            <NavLink to="/admin">... admin </NavLink>
            /
            <NavLink to="/admin/table"> list table </NavLink>
            / banner
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
