/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
// import React from 'react';
// import React, { useState } from 'react';
// react-bootstrap components
// import {
//   Col,
//   Container, Row,
// } from 'react-bootstrap';
// import { Card } from 'material-ui';
// import { Button } from 'bootstrap';
import {
  Button,
  Card,
  Col,
  Container, Row
} from 'react-bootstrap';

function CreatePost() {
  const {
    register, handleSubmit, formState: { errors }
  } = useForm();

  useEffect(() => {}, []);
  const onSubmitLogin = (data) => {
    console.log(data);
  };

  return (
    <>
      <Container fluid>

        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Profile Update</Card.Title>
              </Card.Header>
              <Card.Body>
                <form method="POST" onSubmit={handleSubmit(onSubmitLogin)}>
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="title"
                      className="form-control"
                      placeholder="Enter Title"
                      {...register('title', { required: true })}
                    />
                    {errors.email && (
                    <strong>
                      <span className="text-danger">This field is required</span>
                    </strong>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Short Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter short title"
                      {...register('short_title', { required: true })}
                    />
                    {errors.password && (
                    <strong>
                      <span className="text-danger">This field is required</span>
                    </strong>
                    )}
                  </div>

                  <div className="form-group">
                &nbsp;
                  </div>
                  <button type="submit" className="btn btn-login btn-block">Post</button>
                  <br />
                </form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={
                    require('assets/img/photo-1431578500526-4d9613015464.jpeg')
                      .default
                  }
                />
              </div>
              <Card.Body>
                <div className="author">
                  <a href="https://www.facebook.com/passerelles.numeriques">
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require('assets/img/faces/pn-logo.png').default}
                    />
                    <h5 className="title">Passerelles numériques</h5>
                  </a>
                  <p className="description">A Gateway for Life</p>
                  <p>Passerelles numériques is a French NGO created in 2005 and operating in Cambodia, the Philippines and Vietnam</p>
                </div>
              </Card.Body>
              <hr />
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square" />
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default CreatePost;
