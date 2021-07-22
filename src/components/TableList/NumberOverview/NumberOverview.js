/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/no-unresolved */
import { callAPI } from 'API/callAPI';
import React, { useEffect, useState } from 'react';
import { Card, Spinner, Table } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function NumberOverview() {
  const [listData, setList] = useState();
  const show = (list) => {
    if (list) {
      return (
        <tr>
          <td>
            {list.current_students}
          </td>
          <td>{list.alumni}</td>
          <td>{list.total_students}</td>
          <td>
            {list.percent_get_job}
            %
          </td>
          <td>
            {list.average_wage}
            {' '}
            VNĐ
          </td>
          <td>
            {list.percent_alumni_it}
            %
          </td>
          <td>
            {list.alumni_allowance}
            %
          </td>
        </tr>
      );
    }
  };
  useEffect(() => {
    callAPI('number_overviews').then((data) => {
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
          <br />
          <Table className="table-hover">
            <thead>
              <tr>
                <th className="border-0">Number of current student</th>
                <th className="border-0">Alumni</th>
                <th className="border-0">Total Students</th>
                <th className="border-0">Employment rate</th>
                <th className="border-0">Average Wage</th>
                <th className="border-0">IT employment rate</th>
                <th className="border-0">Alumni's return donation rate</th>
              </tr>
            </thead>
            <tbody>
              {listData ? show(listData) : (
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
