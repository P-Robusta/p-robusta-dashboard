/* eslint-disable no-const-assign */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useLocation } from 'react';
import {
  Button,
  Card, Form, Modal, Spinner, Table
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { getBanner, callAPI } from 'API/callAPI';
// import uploadImage from 'helpers/uploadImg';
import { notice } from 'API/callAPI';
import { APIpost } from 'API/callAPI';
import axios from 'axios';

export default function Partner() {
  const [listPost, setList] = useState();
  const [componentStatus, setStatus] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isLoad, setLoad] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setLoad(false);
    setStatus(componentStatus + 1);
  };
  useEffect(() => {
    callAPI('partners').then((data) => {
      setList(data);
    }).catch(() => {
      alert('Error: Lost Connect');
    });
  }, []);

  useEffect(() => {
    callAPI('partners').then((data) => {
      setList(data);
    });
  }, [componentStatus]);

  const del = (id) => {
    const endpoint = `partners/${id}`;
    const status = callAPI(endpoint, 'DELETE');
    if (status) {
      alert(`Successfully deleted banner with id: ${id}`);
    } else {
      alert('Delete failed');
    }
    setStatus(componentStatus + 1);
  };
  const show = (list) => {
    if (list.length) {
      return list.map((prop, key) => (
        <tr key={key}>
          <td>
            {key + 1}
          </td>
          <td><img width="100" src={prop.imgPNV} alt="image of post" /></td>
          <td><img width="100" src={prop.image} alt="image of post" /></td>
          <td>
            {prop.text}
          </td>
          <td>
            <div className="row">
              <b><i className="nc-icon nc-tag-content" /></b>
              <NavLink
                to={`/admin/table/partner/${prop.id}/edit`}
                className="nav-link"
                activeClassName="active"
              >
                {' '}
                Edit
              </NavLink>
            </div>
          </td>
          <td>
            <NavLink
              to="#"
              onClick={() => del(prop.id)}
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
        <td colSpan="4" className="text-warning"> No data in table</td>
      </tr>
    );
  };
  function uploadImage(img) {
    const body = new FormData();
    body.append('key', '22db36e00bee3ef919df52f806224a17');
    body.append('image', img);
    return axios({
      method: 'post',
      url: 'https://api.imgbb.com/1/upload',
      data: body,
      headers: {
        'content-type': 'multipart/form-data',
      }
    }).then((res) => res.data.data.display_url).catch(() => false);
  }
  // Submit in modal
  const onFormSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    const formData = new URLSearchParams();
    const imgPNV = document.getElementById('imgPNV').files[0];
    const logo = document.getElementById('logo').files[0];
    const text = document.getElementById('text').value;
    await uploadImage(imgPNV).then((res) => {
      if (res) {
        formData.append('imgPNV', res);
      }
    });
    await uploadImage(logo).then((res) => {
      if (res) {
        formData.append('image', res);
      }
    });
    formData.append('text', text);
    await APIpost('partners', formData);
    setStatus(componentStatus + 1);
    await notice('Success: ', 'Add a new partner successfully');
    setLoad(false);
    handleClose();
  };
  return (
    <div>
      <Card className="strpied-tabled-with-hover">
        <Card.Header>
          <Card.Title as="h4">
            Partner Table
          </Card.Title>
          <small>
            <NavLink to="/admin">... admin </NavLink>
            /
            <NavLink to="/admin/table"> list table </NavLink>
            / partner
          </small>
        </Card.Header>
        <Card.Body className="table-full-width table-responsive px-0">
          <br />
          &emsp;&emsp;
          <Button variant="outline-danger" onClick={handleShow}>
            <i className="nc-icon nc-simple-add" />
            &ensp;
            New Partner
          </Button>

          <Modal show={showModal} onHide={handleClose}>
            <Form onSubmit={onFormSubmit} encType="multipart/form-data">
              <Modal.Header closeButton>
                <Modal.Title>Add the partner</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Summary about partner</Form.Label>
                  <textarea className="form-control" rows="4" cols="50" id="text" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Image of partner with PNV</Form.Label>
                  <input className="form-control" name="imagePNV" id="imgPNV" type="file" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Logo of partner</Form.Label>
                  <input className="form-control" name="logo" id="logo" type="file" />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                {isLoad ? (
                  <Button variant="primary">
                    Loading...
                    &ensp;
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  </Button>
                )
                  : (
                    <Button variant="primary" type="submit">
                      Save Changes
                    </Button>
                  ) }

              </Modal.Footer>
            </Form>
          </Modal>
          <br />
          <Table className="table-hover">
            <thead>
              <tr>
                <th className="border-0">Number List</th>
                <th className="border-0">Image with PNV</th>
                <th className="border-0">Logo</th>
                <th className="border-0">Summary about the partner</th>
                <th className="border-0" colSpan="2">Handle</th>
              </tr>
            </thead>
            <tbody>
              {listPost ? show(listPost) : (
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
